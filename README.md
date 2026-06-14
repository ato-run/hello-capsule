# hello-capsule

A minimal, dependency-free **fixture capsule** used by ato's Managed Cloud MVP to
prove `run_capsule_lite` / `capsule_toml_lite` execution end to end: a Fly-hosted
runner materializes this repo's tarball, reads `capsule.toml`, and runs the
`[targets.main].run` entrypoint (`node main.js`), which prints
`hello from capsule.toml_lite` and exits 0.

Not a real application — it exists only as a controlled, allowlisted smoke target.
