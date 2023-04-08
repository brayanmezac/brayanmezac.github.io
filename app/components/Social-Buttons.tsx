import React from 'react'
import { FaDiscord,FaGithub, FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import Link from 'next/link'

type Props = {}

export default function SocialLinks({}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-2">
      {/* Dicord */}
      <Link
        href={"http://discord.gg/brayanmezac#0240"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#7289da' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaDiscord/>
      </Link>

      {/* github */}
      <Link
        href={"https://github.com/brayanmezac"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#333' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaGithub/>
      </Link>

      {/* facebook */}
      <Link
        href={"https://www.facebook.com/brayanmezacs"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#1877f2' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaFacebook/>
      </Link>

      {/* twitter */}
      <Link
        href={"https://twitter.com/BrayanMezaC_Dev"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#1da1f2' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaTwitter/>
      </Link>

      {/* instagram */}
      <Link
        href={"https://www.instagram.com/brayanmezac.dev/"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#c13584  ' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaInstagram/>
      </Link>

      {/* youtube */}
      <Link
        href={"https://www.youtube.com/channel/UCAzVCmasqPB3qnXiMCMHCNg"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#ff0000' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaYoutube/>
      </Link>

      {/* tiktok */}
      <Link
        href={"https://www.tiktok.com/@brayanmezac"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#6a76ac' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaTiktok/>
      </Link>

      {/* linkedin */}
      <Link
        href={"https://www.linkedin.com/in/brayanmezac/"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#0077b5' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaLinkedin/>
      </Link>
      
      
      {/* whatsapp */}
      <Link
        href={"https://api.whatsapp.com/3058159541"}
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{ backgroundColor: '#128c7e' }}
        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
        <FaWhatsapp/>
      </Link>
    </div>
  )
}