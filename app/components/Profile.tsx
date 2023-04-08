import React from 'react'
import Image from 'next/image'

export default function Profile() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/perfil.png"
        alt={'Foto de Brayan Meza Castillo'}
        width={300}
        height={300}
        priority={true}
        />
    </section>
  )
}