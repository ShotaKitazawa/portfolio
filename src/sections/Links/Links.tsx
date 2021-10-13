import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CircularProgress } from '@material-ui/core'

import { GetLinkInterface } from '../../drivers/interfaces'
import GetLink from '../../drivers/csv-over-http/csv-over-http'

const csvUrl =
  'https://raw.githubusercontent.com/ShotaKitazawa/ShotaKitazawa/main/links.csv'

export const Links: React.FC = () => {
  const Links: GetLinkInterface = new GetLink(csvUrl)
  const linksList = Links.list()

  return (
    <section id="links" className="mb-28">
      <div className="text-center">
        <h2 className="font-bold text-3xl tracking-tight">Links</h2>
        <div className="text-gray-400 text-xl">リンク集</div>
      </div>

      <div className="mx-auto flex flex-wrap justify-center w-1/2">
        {linksList != null ? (
          linksList.map(({ name, icon_url, description, link }, i) => (
            <div
              className="mx-5 my-5 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              key={i}
            >
              <a href={link} className="hover:no-underline">
                <Card className="flex hover:bg-indigo-200">
                  {icon_url.startsWith('/') ? (
                    <Image
                      src={icon_url}
                      alt={description}
                      width={64}
                      height={64}
                      layout="intrinsic"
                      className="flex-none w-16 h-16"
                    />
                  ) : (
                    <img
                      src={icon_url}
                      alt={description}
                      width={64}
                      height={64}
                      className="flex-none w-16 h-16"
                    />
                  )}
                  <CardContent className="flex-grow w-16">
                    <p className="text-center text-xl font-bold">{name}</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </section>
  )
}
