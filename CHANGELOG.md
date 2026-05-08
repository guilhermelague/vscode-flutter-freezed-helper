# Change Log

All notable changes to the "vscode-flutter-freezed-helper" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [1.0.0] - 2026-05-08

### Added
- Snippets `frcp` and `frfp`: Freezed class with private constructor (`const ClassName._()`), enabling custom methods and getters — useful for model-to-entity conversion.

### Changed
- Updated snippets `frc` and `frf` to be compatible with **Freezed 2.x / Dart 3**: `abstract class`, `const factory`, named parameters, and `fromJson` with arrow syntax.
- Removed manual `toJson()` from snippets — Freezed generates it automatically when `fromJson` uses `=>`.
- Code generation commands now use `dart run build_runner` instead of the legacy `flutter packages pub run build_runner`.
- Removed `--delete-conflicting-outputs` flag (now always active by default in build_runner 2.7+).
- Replaced deprecated `vscode.workspace.rootPath` API with `vscode.workspace.workspaceFolders`.

### Fork
- Forked from [mthuong/vscode-flutter-freezed-helper](https://github.com/mthuong/vscode-flutter-freezed-helper), which has been inactive for 5 years.
