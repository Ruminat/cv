'use client'

import { Dialog } from '@base-ui/react/dialog'
import { Field } from '@base-ui/react/field'
import { Toast } from '@base-ui/react/toast'
import { ArrowRight, Send } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'

import { cn } from '@/shared/lib/Cn'
import { buttonVariants } from '@/shared/ui/ButtonVariants'

export function ContactDialog() {
  const toastManager = Toast.useToastManager()
  const formRef = useRef<HTMLFormElement>(null)
  const sentRef = useRef(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState('')

  const canSubmit = message.trim().length > 0

  function resetForm() {
    setMessage('')
    setContact('')
  }

  function submit() {
    if (!canSubmit) return

    // Close first; the confirmation toast is shown from onOpenChangeComplete once
    // the dialog has fully unmounted. Adding a toast while the modal popup is still
    // mounted fights its focus management and keeps the dialog open.
    sentRef.current = true
    resetForm()
    setOpen(false)
  }

  // Submit on Enter or Cmd/Ctrl+Enter (Shift+Enter keeps its newline).
  function handleMessageKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== 'Enter' || event.shiftKey) return
    if (!canSubmit) return
    event.preventDefault()
    formRef.current?.requestSubmit()
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (!nextOpen) resetForm()
      }}
      onOpenChangeComplete={(isOpen) => {
        if (isOpen || !sentRef.current) return
        sentRef.current = false
        toastManager.add({
          title: 'Message sent',
          description: "Thanks for reaching out — I'll contact you soon.",
          timeout: 6000,
        })
      }}
    >
      <Dialog.Trigger
        className={cn(
          buttonVariants({ size: 'lg' }),
          'group bg-gradient-to-r from-brand-orange to-brand-pink text-primary-foreground hover:opacity-90',
        )}
      >
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          Let&apos;s talk
          <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            'fixed inset-0 z-50 bg-background/70 backdrop-blur-sm',
            'transition-opacity duration-300',
            'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
          )}
        />
        <Dialog.Popup
          className={cn(
            'glass fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2',
            'rounded-3xl border border-border p-6 shadow-2xl sm:p-8',
            'transition-all duration-300 ease-out',
            'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            'data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
          )}
        >
          <Dialog.Title className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">Let&apos;s talk</span>
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tell me what&apos;s on your mind and, if you like, how to reach you back.
          </Dialog.Description>

          <form
            ref={formRef}
            onSubmit={(event) => {
              event.preventDefault()
              submit()
            }}
            className="mt-6 flex flex-col gap-5"
          >
            <Field.Root name="message" className="flex flex-col gap-2">
              <Field.Label className="text-sm font-medium text-foreground">
                Message
              </Field.Label>
              <Field.Control
                required
                render={
                  <textarea
                    autoFocus
                    rows={4}
                    placeholder="What would you like to talk about?"
                    onKeyDown={handleMessageKeyDown}
                  />
                }
                value={message}
                onValueChange={setMessage}
                className={cn(
                  'w-full resize-none rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm',
                  'placeholder:text-muted-foreground/70',
                  'transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40',
                )}
              />
              <Field.Error className="text-xs text-destructive" />
            </Field.Root>

            <Field.Root name="contact" className="flex flex-col gap-2">
              <Field.Label className="text-sm font-medium text-foreground">
                How can I contact you?{' '}
                <span className="font-normal text-muted-foreground">(optional)</span>
              </Field.Label>
              <Field.Control
                placeholder="Email, Telegram, LinkedIn…"
                value={contact}
                onValueChange={setContact}
                className={cn(
                  'w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm',
                  'placeholder:text-muted-foreground/70',
                  'transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40',
                )}
              />
            </Field.Root>

            <div className="mt-1 flex items-center justify-end gap-3">
              <Dialog.Close
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'border-border bg-card/40',
                )}
              >
                Cancel
              </Dialog.Close>
              <button
                type="submit"
                disabled={!canSubmit}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'group bg-gradient-to-r from-brand-orange to-brand-pink text-primary-foreground hover:opacity-90',
                )}
              >
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  Send message
                  <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
