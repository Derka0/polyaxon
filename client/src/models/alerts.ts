export interface AlertByIds { [id: string]: { error: any, type: string, success: boolean | null }; };
export interface AlertGlobal { [type: string]: { error: any, success: boolean | null }; };

export class AlertEntityModel {
  public byIds: AlertByIds;
  public global: AlertGlobal;
}

export const AlertEntityEmpty = () => ({
  byIds: {},
  global: {},
});

export class AlertSchema {
  public projects: AlertEntityModel;
  public groups: AlertEntityModel;
  public experiments: AlertEntityModel;
  public experimentJobs: AlertEntityModel;
  public jobs: AlertEntityModel;
  public notebooks: AlertEntityModel;
  public tensorboards: AlertEntityModel;
  public builds: AlertEntityModel;
  public metrics: AlertEntityModel;
  public statuses: AlertEntityModel;
  public outputs: AlertEntityModel;
  public chartViews: AlertEntityModel;
  public searches: AlertEntityModel;
  public activityLogs: AlertEntityModel;
  public healthStatus: AlertEntityModel;
  public codeReference: AlertEntityModel;
}

export const AlertEmptyState = {
  projects: AlertEntityEmpty(),
  groups: AlertEntityEmpty(),
  experiments: AlertEntityEmpty(),
  experimentJobs: AlertEntityEmpty(),
  jobs: AlertEntityEmpty(),
  notebooks: AlertEntityEmpty(),
  tensorboards: AlertEntityEmpty(),
  builds: AlertEntityEmpty(),
  metrics: AlertEntityEmpty(),
  statuses: AlertEntityEmpty(),
  outputs: AlertEntityEmpty(),
  chartViews: AlertEntityEmpty(),
  searches: AlertEntityEmpty(),
  activityLogs: AlertEntityEmpty(),
  healthStatus: AlertEntityEmpty(),
  codeReference: AlertEntityEmpty(),
};

export const processErrorById = (state: AlertEntityModel,
                                 id: number | string,
                                 error: any,
                                 success: boolean | null,
                                 type: string) => {
  const idState: { [id: string]: { error: any, type: string, success: boolean | null } } = {};
  idState[id.toString()] = {type, error, success};
  return {
    ...state,
    byIds: {...state.byIds, ...idState}
  };
};

export const processErrorGlobal = (state: AlertEntityModel,
                                   error: any,
                                   success: boolean | null,
                                   type: string) => {
  const newState: { [type: string]: { error: any, success: boolean | null } } = {};
  newState[type] = {error, success};
  return {
    ...state,
    global: {...state.global, ...newState}
  };
};
