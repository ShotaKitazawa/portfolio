import { HttpLink } from '../entities/entities'

export interface GetLinkInterface {
  list(): HttpLink[]
}
