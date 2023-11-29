import {GroupType} from "./group-type.type";

export type Group = {
  _id: string;
  __v: number;
  name: string;
  tag: string;
  owners: [];
  members: [];
  roles: [];
  groupChats: [];
  groupType: GroupType | string;
  color: string;
  icon: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};
