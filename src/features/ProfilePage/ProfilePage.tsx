import { Toast } from '@base-ui/react/toast'

import { SiteBackground } from '@/shared/ui/SiteBackground'
import { Toaster } from '@/shared/ui/Toaster'
import { CareerJourney } from '@/features/ProfilePage/components/CareerJourney'
import { EducationLanguages } from '@/features/ProfilePage/components/EducationLanguages'
import { Hero } from '@/features/ProfilePage/components/Hero'
import { SideProjects } from '@/features/ProfilePage/components/SideProjects'
import { SiteFooter } from '@/features/ProfilePage/components/SiteFooter'
import { Skills } from '@/features/ProfilePage/components/Skills'
import { YandexInfrastructure } from '@/features/ProfilePage/components/YandexInfrastructure'

export function ProfilePage() {
  return (
    <Toast.Provider limit={1}>
      <main className="relative min-h-screen overflow-x-clip">
        <SiteBackground />
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Hero />
          <CareerJourney />
          <YandexInfrastructure />
          <Skills />
          <SideProjects />
          <EducationLanguages />
          <SiteFooter />
        </div>
      </main>
      <Toaster />
    </Toast.Provider>
  )
}
