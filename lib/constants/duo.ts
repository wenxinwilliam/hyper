export const OPEN_DUO = 'OPEN_DUO';

export interface OpenDuoAction {
  type: typeof OPEN_DUO;
  now?: number;
}

export type DuoActions = OpenDuoAction;
