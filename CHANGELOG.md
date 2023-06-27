# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

### [3.3.1](https://github.com/entrostat/docker-hash-build/compare/v3.3.0...v3.3.1) (2023-06-27)


### Bug Fixes

* **devops:** Downgraded to Node 16 for the builds ([b668a18](https://github.com/entrostat/docker-hash-build/commit/b668a18cca8508f7d985305bee1e6b218206d30c))

## [3.3.0](https://github.com/entrostat/docker-hash-build/compare/v3.2.0...v3.3.0) (2023-06-27)


### Features

* **devops:** Added the ability to pack tarballs ([762cdc7](https://github.com/entrostat/docker-hash-build/commit/762cdc7e386664398dd2ec95f37ab00d651421b2))

## [3.2.0](https://github.com/entrostat/docker-hash-build/compare/v3.1.1...v3.2.0) (2023-06-26)


### Features

* **tagging:** Add the base tag as something to copy the image to, so we don't just copy to 'tag-vX.X.X' but we also copy to 'tag' ([8580ef0](https://github.com/entrostat/docker-hash-build/commit/8580ef030ad5c14bcf7ec2fa26895d05a234993f))

### [3.1.1](https://github.com/entrostat/docker-hash-build/compare/v3.1.0...v3.1.1) (2023-06-24)


### Bug Fixes

* **buildx-flags:** Updated the Github Actions example, it had incorrect flags ([e16d9a5](https://github.com/entrostat/docker-hash-build/commit/e16d9a515f63a7dfcd2e134849cb5467859978f4))

## [3.1.0](https://github.com/entrostat/docker-hash-build/compare/v3.0.3...v3.1.0) (2023-06-24)


### Features

* **exist-check:** Use regctl to check if a manifest exists or not to ensure that we don't get the unsupported manifest issues ([6b074d3](https://github.com/entrostat/docker-hash-build/commit/6b074d350c52df699e6f5ff40a66ac6aa92b367e))

### [3.0.3](https://github.com/entrostat/docker-hash-build/compare/v3.0.2...v3.0.3) (2023-06-24)

### [3.0.2](https://github.com/entrostat/docker-hash-build/compare/v3.0.0...v3.0.2) (2023-06-24)


### Bug Fixes

* **cache:** I didn't plug the buildx changes into the build command ([9a2f9f6](https://github.com/entrostat/docker-hash-build/commit/9a2f9f6fa86f69d28607f3157905bfa2a547d243))

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
