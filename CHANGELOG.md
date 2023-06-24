# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [3.0.0-alpha.0](https://github.com/entrostat/docker-hash-build/compare/v2.1.2...v3.0.0-alpha.0) (2023-06-24)


### ⚠ BREAKING CHANGES

* **cache:** Added the ability to specify additional buildx build flags. In this case, you can added Github action caching and more.

### Features

* **cache:** Added the ability to specify additional buildx build flags. In this case, you can added Github action caching and more. ([2a616b8](https://github.com/entrostat/docker-hash-build/commit/2a616b8393b96d5d7f645d3b8441af2a0e6707a7))

### [2.1.2](https://github.com/entrostat/docker-hash-build/compare/v2.1.1...v2.1.2) (2023-06-24)


### Bug Fixes

* **image-name:** The registry was being inserted twice when you specify the registry. The image name generator includes the registry so there is no need to add it again. ([f2fd763](https://github.com/entrostat/docker-hash-build/commit/f2fd763071aca49b30b74078cfbaa491307530a7))

### [2.1.1](https://github.com/entrostat/docker-hash-build/compare/v2.1.0...v2.1.1) (2023-06-24)


### Bug Fixes

* **devops:** Removed the shrinkwrap json file from the Dockerfile build ([25cc8c2](https://github.com/entrostat/docker-hash-build/commit/25cc8c272ef25b3cfa691051788b9dafbb1fad9b))

## [2.1.0](https://github.com/entrostat/docker-hash-build/compare/v2.0.0...v2.1.0) (2023-06-24)


### Features

* **tags:** Added more tags for the search on npm.js ([2136797](https://github.com/entrostat/docker-hash-build/commit/21367979f2714db9eae3af5a677d59029d86cced))

## [2.0.0](https://github.com/entrostat/docker-hash-build/compare/v1.0.2...v2.0.0) (2023-06-24)


### Bug Fixes

* **naming:** Adjusted the name of hash-build to docker-hash-build because NPMjs claims it's too similar to hashbuild which already exists ([d43afba](https://github.com/entrostat/docker-hash-build/commit/d43afba4c051e1e33feec007e8382c73decb05a7))

### [1.0.2](https://github.com/entrostat/hdocker-hash-build/compare/v1.0.1...v1.0.2) (2023-06-24)

### [1.0.1](https://github.com/entrostat/hdocker-hash-build/compare/v1.0.0...v1.0.1) (2023-06-24)
