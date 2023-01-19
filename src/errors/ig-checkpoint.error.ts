import { IgResponseError } from './ig-response.error';
import { CheckpointResponse } from '../responses';
import { HOSTNAME } from '../core/constants';

export class IgCheckpointError extends IgResponseError<CheckpointResponse> {
  get url() {
    return this.response.body.challenge.url;
  }

  get apiUrl() {
    return `https://${HOSTNAME}/api/v1` + this.response.body.challenge.api_path;
  }
}
