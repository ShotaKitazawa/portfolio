import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
} from '@material-ui/core';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

import { GetLinkInterface } from '../../drivers/interfaces'
import GetLink from '../../drivers/csv-over-http/csv-over-http'

const csvUrl = "https://raw.githubusercontent.com/ShotaKitazawa/ShotaKitazawa/main/certification.csv"

export const Certifications: React.FC = ({
  children,
}) => {
  const Links: GetLinkInterface = new GetLink(csvUrl)
  const linksList = Links.list()
  const item = (name: string, icon_url: string, description: string) => (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          {
            icon_url != "" ?
              <img src={icon_url} />
              :
              <VerifiedUserOutlinedIcon />
          }
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={description} />
    </ListItem>
  )

  return (
    <section id="certifications" className="mb-28">
      <div className="text-center">
        <h2 className="font-bold text-3xl tracking-tight">
          Certifications
        </h2>
        <div className="text-gray-400 text-xl">
          取得資格
        </div>
      </div>

      <div className="mb-8" />

      <div className="mx-auto flex flex-wrap justify-center w-1/2">
        <List className="w-full max-w-md">
          {
            linksList != null ?
              linksList.map(({ name, icon_url, description, link }) => (
                <>
                  {
                    link != "" ?
                      <a href={link} className="hover:no-underline">
                        {item(name, icon_url, description)}
                      </a>
                      :
                      <>
                        {item(name, icon_url, description)}
                      </>
                  }
                </>
              ))
              :
              <CircularProgress />
          }
        </List>
      </div>
    </section >
  )
}

const contents = [
  {
    name: "GitHub",
  },
  {
    name: "Twitter",
  },
  {
    name: "aaaaaaaaaaaaaaaa",
  },
  {
    name: "hoge",
  },
  {
    name: "fuga",
  },
]
