import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Experience from '@/components/Experience'
import Expertise from '@/components/Expertise'
import Tools from '@/components/Tools'
import Philosophy from '@/components/Philosophy'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Experience />
      <Expertise />
      <Tools />
      <Philosophy />
      <Testimonials />
      <Contact />
    </main>
  )
}
