import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import UrlScraper from 'src/components/UrlScraper/UrlScraper'

const ImportPage = () => {
  return (
    <>
      <Metadata title="Import" description="Import page" />

      <UrlScraper />
    </>
  )
}

export default ImportPage
