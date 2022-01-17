import {context, getOctokit} from "@actions/github";
import _ from "lodash";

function assertString(maybeString): asserts maybeString is string {
  if (!_.isString(maybeString)) {
    throw new Error(`${maybeString} is not string, and this action only supports strings as inputs`)
  }

}

assertString(process.env.GITHUB_TOKEN);
assertString(process.env.LABEL_TO_ADD);

export const GITHUB_TOKEN = process.env.GITHUB_TOKEN
export const LABEL_TO_ADD = process.env.LABEL_TO_ADD

const setLabels = async (labels: string[]): Promise<void> => {
  const Github = getOctokit(GITHUB_TOKEN).rest;
  await Github.issues.setLabels({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
    // @ts-expect-error the expected type is (string[] & {name: string}[]) | undefined
    // but string[] and {name: string}[] cannot simultaneously coincide
    labels
  }).then(res => res)
}

void setLabels([LABEL_TO_ADD])


