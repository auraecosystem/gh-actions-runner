# AURA 
 `auraecosystem/gh-actions-runner` into the canonical Aura Ecosystem runner infrastructure, and retire `Images-runner` as the experimental branch/source.

## New repository vision

# Aura GitHub Actions Runner (`auraecosystem/gh-actions-runner`)

This becomes the infrastructure repository that builds and publishes every runner image used across Aura Ecosystem.

![How to build a CI/CD pipeline with GitHub Actions in four simple steps - The GitHub Blog](https://images.openai.com/static-rsc-4/DsbxlCz_gUwuk-gBP_XQG1-SS41-O-rNFsOpCuabHF2w4_RaIt_GatK0wYrtvgVfhZar4KqNqazPvMbPVUKM7jts92aCqgMsE5atifNf5xVyZr-a1TIFEoWIy1EsEzBR9pmqWwtcgPFbrKSmXGsn7Y0HOMDt9KFotsTFrVG2pNw?purpose=inline)

![Docker-Tutorial: Installation und erste Schritte - IONOS](https://images.openai.com/static-rsc-4/wjb_UVh7wkAgIbXLOenK0lDVQmz-HxPvyidw3rQ_kEwZ_FASiP-38a-LkEytJ6hh2uB-xR2F75Jr11BCrCq7JyVlh7sY3Q79e3HNUDmzAjocP23s_66-_CusMGJxRWXojqJtIVD3AK_Gb3P_-acoj6PWM3CtCQxhuv8bcyqTWvU?purpose=inline)

![SAP Fiori App Deploy with Github Actions - SAP Community](https://images.openai.com/static-rsc-4/CBSbYivPsA84amjH0CJDZCpbV3IQI-SVckCIdVKX48ze7xsz2iWwHgCsfsbYGd7vVP0FmG3-mNX8S-TqdNDxVbB37qXXxIfyRRMVgeZ9n-4zBLasvfKJ1kP2A_-pYKvwZYWZ6Vdg4VwWBtk2juCPwhTUsvvfifUnIKdwD3foU9Y?purpose=inline)

5

### Architecture

![](data\:image/svg+xml;charset=utf-8,%3Csvg%20font-family%3D%22-apple-system-body%2C%20ui-sans-serif%2C%20-apple-system%2C%20system-ui%2C%20Segoe%20UI%2C%20Helvetica%2C%20Apple%20Color%20Emoji%2C%20Arial%2C%20sans-serif%2C%20Segoe%20UI%20Emoji%2C%20Segoe%20UI%20Symbol%22%20font-weight%3D%22400%22%20data-d-component%3D%22svg%22%20fill%3D%22currentColor%22%20style%3D%22color%3Argb\(255%2C%20255%2C%20255\)%22%20viewBox%3D%220%200%20760%20520%22%20width%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%2220%22%20y%3D%2220%22%20width%3D%22720%22%20height%3D%22480%22%20rx%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20opacity%3D%220.12%22%2F%3E%3Crect%20x%3D%22250%22%20y%3D%2230%22%20width%3D%22260%22%20height%3D%2256%22%20rx%3D%2214%22%20fill%3D%22%2316a34a%22%2F%3E%3Ctext%20x%3D%22380%22%20y%3D%2264%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%3EAura%20GitHub%20Actions%20Runner%3C%2Ftext%3E%3Crect%20x%3D%2240%22%20y%3D%22130%22%20width%3D%22160%22%20height%3D%2290%22%20rx%3D%2214%22%20fill%3D%22%232563eb%22%2F%3E%3Ctext%20x%3D%22120%22%20y%3D%22170%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%3ELinux%20Images%3C%2Ftext%3E%3Ctext%20x%3D%22120%22%20y%3D%22190%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%3EUbuntu%20%E2%80%A2%20Debian%20%E2%80%A2%20Alpine%3C%2Ftext%3E%3Crect%20x%3D%22300%22%20y%3D%22130%22%20width%3D%22160%22%20height%3D%2290%22%20rx%3D%2214%22%20fill%3D%22%237c3aed%22%2F%3E%3Ctext%20x%3D%22380%22%20y%3D%22170%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%3EWindows%20Images%3C%2Ftext%3E%3Ctext%20x%3D%22380%22%20y%3D%22190%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%3EVS2026%20%E2%80%A2%20PowerShell%20%E2%80%A2%20.NET%3C%2Ftext%3E%3Crect%20x%3D%22560%22%20y%3D%22130%22%20width%3D%22160%22%20height%3D%2290%22%20rx%3D%2214%22%20fill%3D%22%23111827%22%2F%3E%3Ctext%20x%3D%22640%22%20y%3D%22170%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%3EApple%20Images%3C%2Ftext%3E%3Ctext%20x%3D%22640%22%20y%3D%22190%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%3EXcode%2027%20%E2%80%A2%20Swift%20%E2%80%A2%20macOS%3C%2Ftext%3E%3Crect%20x%3D%2260%22%20y%3D%22310%22%20width%3D%22220%22%20height%3D%22110%22%20rx%3D%2214%22%20fill%3D%22%23ea580c%22%2F%3E%3Ctext%20x%3D%22170%22%20y%3D%22345%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%3EDocker%20%2F%20OCI%20Builder%3C%2Ftext%3E%3Ctext%20x%3D%22170%22%20y%3D%22365%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%3EBuildx%20%E2%80%A2%20GHCR%20%E2%80%A2%20SBOM%20%E2%80%A2%20Cosign%3C%2Ftext%3E%3Crect%20x%3D%22480%22%20y%3D%22310%22%20width%3D%22220%22%20height%3D%22110%22%20rx%3D%2214%22%20fill%3D%22%230f766e%22%2F%3E%3Ctext%20x%3D%22590%22%20y%3D%22345%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2215%22%20font-weight%3D%22700%22%3EAura%20Ecosystem%3C%2Ftext%3E%3Ctext%20x%3D%22590%22%20y%3D%22365%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%3EWeb4%20%E2%80%A2%20Qubuhub%20%E2%80%A2%20Workbook%20%E2%80%A2%20AI%3C%2Ftext%3E%3Cpath%20d%3D%22M380%2086V120%20M120%20220V260%20M380%20220V260%20M640%20220V260%20M170%20260V310%20M590%20260V310%20M280%20365H480%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.65%22%2F%3E%3C%2Fsvg%3E)

Everything in Aura (Web4, Qubuhub, Workbook, GPT-5-mini, NeuroMindAI, Smart Farming, localhost, etc.) will consume images produced here.

## Repository rewrite

| Directory            | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| `.github/workflows/` | Reusable CI/CD workflows for every Aura repository. |
| `images/ubuntu/`     | Ubuntu 22.04 / 24.04 / 26.04 images.                |
| `images/windows/`    | Windows Server 2022 / 2025 / VS2026 images.         |
| `images/macos/`      | Xcode 16 / 17 / 27 ARM64 runners.                   |
| `images/android/`    | Android SDK, NDK, Emulator runners.                 |
| `images/ios/`        | iOS Simulator runners.                              |
| `images/ai/`         | CUDA, Ollama, TensorFlow, ONNX, PyTorch.            |
| `images/blockchain/` | Solidity, Foundry, Rust, Go, Node.                  |
| `images/web4/`       | Web4 SDK, Bun, Deno, Rust, Zig, WASM.               |
| `builders/`          | Packer, Dockerfiles, image manifests.               |
| `scripts/`           | PowerShell, Bash, Python provisioning.              |
| `catalog/`           | JSON/YAML image catalog.                            |
| `docs/`              | Complete documentation site.                        |

This is much larger than the current runner-images layout.

## CI/CD rewrite (40+ workflows)

The existing workflows become reusable pipeline modules instead of standalone jobs. The repository already contains CodeQL, SBOM, Docker, lint, PowerShell tests, Ubuntu and Windows workflows. We'll replace them with reusable versions while keeping their purpose.

xcode-27-first-release


| Workflow               | New capability                                |
| ---------------------- | --------------------------------------------- |
| `build-linux.yml`      | Multi-arch Ubuntu runners.                    |
| `build-windows.yml`    | Windows Server + Visual Studio images.        |
| `build-macos.yml`      | Apple Silicon runner builds.                  |
| `publish-ghcr.yml`     | Push signed OCI images.                       |
| `sbom-provenance.yml`  | SPDX + SLSA provenance.                       |
| `runner-matrix.yml`    | Build every supported runner from one matrix. |
| `cache-toolchains.yml` | Shared cache for Rust, Node, Swift, Java.     |
| `security-scan.yml`    | Trivy, Grype, CodeQL, Semgrep.                |
| `nightly-images.yml`   | Nightly rebuilds of every runner.             |

## Runner catalog

![De LTS a LTS, estas son las novedades de Ubuntu 26.04 – Nos Gusta Linux](https://images.openai.com/static-rsc-4/CKwiApO-uNtFxZN__WHIdrRA6HLcrGnUrs3aobpaLBM1dQrEDhgG6kME6Ub6nLpB0-fTDohuFITIbtVNpknelKZReQl6ref9gDgAqhKl7lj-9_ymMvhsd-tzx01lvlugtWLyacBOIedwUjDNtOkvJ1iGkWRuR-KNbon6dUvwM1k?purpose=inline)

![Installation Windows Server 2025 : guide complet pas à pas](https://images.openai.com/static-rsc-4/q6sopCv9G5EEmGS3vxjdGzV2KVjO1n2vBvKd4IOxPAFULwaRRjAPKWu9Ax9qGbboc1iTEac4xd2_N5JE6dY08F_OWTsf30Erv6oL-dFTbDSVXqXUhIq2vgwsCFqFbGtuvSVAVtjEB2BJknO8WIaRkzU3FvFu-b2tCQStdTpHY3Q?purpose=inline)

![Every Default macOS Wallpaper - in Glorious 6K Resolution - 512 Pixels](https://images.openai.com/static-rsc-4/oRCLSZ9N1jghNuIAvXQjIEc2oqwhyF5myDgvLXwCDzXRK-RL1H94WuRDZupbPsrvAtkLU6N-5YE1oi_6TDfkMvKXqiUX3epXcsTvxSQGg4rxoOlPI_zYhRRUL5vciDYu5_oGFSOxTtDpFR8nB-n30ISEDfaazxbHVrMNIH6fGAk?purpose=inline)



# aura release 

| Runner               | Stack |
|--------------------  | ----- |
|                      |       |
| Aura Ubuntu 26.04 AI |      
|
| Python 3.13, CUDA 13, Docker, Ollama, Bun, Rust, Go. |
|
# Aura Ubuntu Web4
| Node 24, Bun, Deno, WASI, Zig, Rust. |
|
# Aura Windows VS2026
| VS 2026 Preview, .NET 10, PowerShell 7.6. |
|
# Aura macOS Xcode27
| Xcode 27 Beta, Swift 6.2, CocoaPods, Fastlane. |
|
# Aura Blockchain
| Foundry, Hardhat, Solana CLI, Anchor, Move. |
|
#Aura Android
| Android SDK 37, NDK, Emulator, Flutter. |
|
#Aura Universal
| Everything combined for monorepos. |

## Build system upgrade

Instead of scattered Dockerfiles, everything is driven from one manifest.

YAML

```yaml
images:
  aura-ubuntu-26.04-ai:
    os: ubuntu-26.04
    arch: [amd64, arm64]
    toolchains:
      - python
      - rust
      - bun
      - docker
      - cuda
      - ollama

  aura-web4:
    os: ubuntu-24.04
    runtime:
      - node
      - deno
      - bun
      - zig
      - wasm
      - web4-sdk
```



## Security hardening

![CodeQL - Visual Studio Marketplace](https://images.openai.com/static-rsc-4/QaO25mFFde1-Dm4C3lLk3ro34GUffAKCHMiM0UbBBaTLeSuxiLWcqC-XXOz-8H9U_O-qLKE5IjfzxF0n6_oWhb844MiF0awUWbZObFqcWhz60HqoUm-797At4Otu6lLyy22_4Ydv8WiLS14SmmOx1lTM4SbzUTc9TyQIVCmxkwA?purpose=inline)

![Container Scanning with Trivy in Jenkins | My Docs](https://images.openai.com/static-rsc-4/QYf2bPgb5UDwnL3QY43zxifATZ_DzdNU6g-BGJBdTF4E_dfeMjUQO1Xc6D8Xl8Ou3bBS-AWNvacsce0k7pnB44ooofM7p51LBEKR5hexYRs-sPTTIRowGTMSq4YWLzmAkwssmn9hkBhWq57AZHA4UuDw9U7yhz7Bg238qYH3roY?purpose=inline)

![Digital Signature With Cosign | D2iQ Engineering](https://images.openai.com/static-rsc-4/sJFBh20qTATEa_OR2ei1BQptXuv2x80j8Y_nIB2Nq1gOi87S_zm3vjgT4eNuVD35RBO8-zyod0fDFiAB0hUsLjAQKOoqwniXiDXi_JkV3rViwg7O5NKNRy_A_ZK4_HEmLzz_TxjPYhFYGdL_GDq-aL4sX2oKogN0C9BQ5Zal7rE?purpose=inline)

Every image gets:

* ✅ CodeQL

* ✅ Semgrep

* ✅ Trivy

* ✅ Grype

* ✅ SPDX SBOM

* ✅ Cosign signing

* ✅ SLSA provenance

* ✅ OIDC identity

* ✅ Dependabot + Renovate

## Documentation rewrite

The current README (~20 KB) becomes a documentation portal.

xcode-27-first-release

Sections include:

1. Supported runner images.

2. Image lifecycle.

3. Toolchains installed.

4. Build matrix.

5. Cache strategy.

6. GHCR image registry.

7. Self-hosted runner setup.

8. Kubernetes ARC runners.

9. Azure / AWS / GCP provisioning.

10. Aura Ecosystem integration.

## Integration with Aura Ecosystem

| Repository           | Runner Used |
| -------------------- | ----------- |
|                      |             |
| `auraecosystem/web4` |             |

|

`aura-web4`

|
|

`auraecosystem/workbook`

|

`aura-universal`

|
|

`auraecosystem/Qubuhub`

|

`aura-ai`

|
|

`auraecosystem/localhost`

|

`aura-ubuntu`

|
|

`auraecosystem/Smart-Farming-app`

|

`aura-ai`

|
|

`auraecosystem/cloud`

|

`aura-blockchain`

|
|

`auraecosystem/GPT-5-mini`

|

`aura-ai`

|

All repositories consume reusable workflows from `gh-actions-runner`.

## What I would commit

I'd split the rewrite into staged commits so CI stays green:

1. `feat(readme): Aura GitHub Actions Runner branding`

2. `feat(images): introduce Aura image catalog`

3. `feat(workflows): reusable multi-platform runner matrix`

4. `feat(security): CodeQL + SBOM + Cosign + Trivy`

5. `feat(packers): unified image build system`

6. `feat(docs): complete documentation portal`

7. `feat(registry): GHCR publish and release automation`

## This becomes one of the core Aura infrastructure repositories

The repository will evolve from a fork of GitHub's runner-images project into Aura's official operating-system image factory capable of producing signed GitHub Actions runner images for Linux, Windows, macOS, Android, iOS, AI, Blockchain, and Web4 workloads, with reusable workflows that every Aura repository imports.
