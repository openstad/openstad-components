export interface IdeaState {
  ideas: Idea[],
  selectedIdea?: number,
}

export interface Location {
  coordinates: number[]
}
enum IdeaStatus {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  ACCEPTED = 'ACCEPTED',
  DONE = 'DONE',
  BUSY = 'BUSY',
  DENIED = 'DENIED'
}

interface ExtraData {
  estimate: string
}

export interface Idea {
  id: number;
  name?: string,
  image?: string,
  location?: Location
  siteId: number,
  userId: number,
  startDate: string,
  startDateHumanized: string,
  endDate: string,
  endDateHumanized: string,
  duration: number,
  sort: number,
  typeId: number,
  status: IdeaStatus,
  viewableByRole: string,
  title: string,
  posterImageUrl?: string,
  summary: string,
  description:string,
  budget?: number|null,
  extraData?: ExtraData,
  modBreakUserId?: string|null,
  modBreakDate?: string|null,
  createDateHumanized: string,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string|null,
  createdAtText: string,
}
