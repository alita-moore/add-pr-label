# Add Pr Label Github Action
This action allows you to add a single label to the triggering PR

# Example
```yaml
on: [pull_request_target]
name: Auto-Merge Bot
jobs:
  add_label:
    runs-on: ubuntu-latest
    steps:
    - name: Add Label
      uses: "alita-moore/add-pr-label"
      env:
          githubToken: "${{ secrets.GITHUB_TOKEN }}"
          labelToAdd: "automerge"
```

The intended action of this workflow is to add the label `automerge` every time the `pull_request_target` event occurs
