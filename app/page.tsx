import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import logo from '@/public/Rectangle1.png'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <h1>Hello World {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
      <button className="btn btn-info">button</button>
      <Image src={logo} alt="logo" />
      <Image
        src="https://pixabay.com/get/gc035b887395c2e74693474d974ff127db8756862193414e8e3c1828113ae4d2001e977daf1e992ac91ca9cf29e580b7b_1280.jpg"
        alt="logo2"
        // fill
        // className="object-cover"
        width={800}
        height={200}
        // sizes="100vw"
        sizes="(max-width: 480px) 100vw, (max-width: 1200px, 100vw, 33vw)"
      />
    </main>
  )
}
