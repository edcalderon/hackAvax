import * as React from 'react'

import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaInstagram, FaLinkedin, FaYoutube, } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { MdLanguage } from "react-icons/md";
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Urbanik',
    description: 'La evolución en inversión inmobiliaria',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      /*
      {
        id: 'inversores',
        label: 'Inversores',
      },
      {
        id: 'promotores',
        label: 'Promotores',
      },
    */
      {
        id: 'nosotros',
        label: 'Nosotros',
        mx:'5vw',

      },
      /*
      {
        id:'lang',
        label:<MdLanguage size="24" />,
        py: '1',
        mx:'5vw',
      },
      */
      {
        label: 'Registrate',
        href: '/signup',
        variant: 'outline',
        colorScheme: 'urbanik',
        borderRadius: '500px',
      },
      {
        id:'Ingresar',
        label: 'Ingresar',
        href: '/login',
        variant: 'solid',
        colorScheme: 'urbanik',
        borderRadius: '500px',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        ©
        <Link href="https://www.linkedin.com/company/urbanik.co/">Urbanik.co</Link>
        {' '}2024 - Todos los derechos reservados
      </>
    ),
    links: [
      {
        href: 'https://Instagram.com/urbanikhub/',
        label: <FaInstagram size="20" color='white'/>,
      },
      {
        href: 'https://www.linkedin.com/company/urbanik.co/',
        label: <FaLinkedin size="20" color='white'/>,
      },
      {
        href: 'https://youtube.com/channel/UCDgJu3OybMWUExHitFxOo4g',
        label: <FaYoutube size="20" color='white'/>,
      },
    ],
  },
  preRegister: {
    title: 'Haz parte de nuestra comunidad',
    subTitle: 'Únete a nuestra lista de espera',
  },

  signup: {
    title: 'Start building Community with Loyaltia',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
