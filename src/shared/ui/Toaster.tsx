'use client'

import { Toast } from '@base-ui/react/toast'
import { X } from 'lucide-react'

import { cn } from '@/shared/lib/Cn'

/**
 * Renders the queued toasts. Must live inside a `<Toast.Provider>`.
 * Kept to a single visible toast so we don't need Base UI's stacking CSS.
 */
export function Toaster() {
  const { toasts } = Toast.useToastManager()

  return (
    <Toast.Portal>
      <Toast.Viewport className="fixed bottom-4 right-4 left-4 z-[100] flex flex-col gap-2 sm:left-auto sm:w-88">
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            toast={toast}
            className={cn(
              'glass relative flex flex-col gap-1 rounded-2xl border border-border p-4 pr-10 shadow-xl',
              'transition-all duration-300 ease-out',
              'data-[starting-style]:translate-y-3 data-[starting-style]:opacity-0',
              'data-[ending-style]:translate-y-3 data-[ending-style]:opacity-0',
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-orange to-brand-pink"
            />
            <Toast.Title className="text-sm font-semibold text-foreground" />
            <Toast.Description className="text-sm leading-relaxed text-muted-foreground" />
            <Toast.Close
              aria-label="Dismiss"
              className="absolute top-3 right-3 inline-flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </Toast.Close>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  )
}
