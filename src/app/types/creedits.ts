export type CreditsDto = {
  cast: Actor[]
}

export type Actor = {
  name: string
  profile_path: string
  character: string
  id: number
}
