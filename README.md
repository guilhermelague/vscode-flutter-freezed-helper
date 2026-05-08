# Flutter Freezed Helpers VSCode Extension

Helps you write [Freezed](https://pub.dev/packages/freezed) annotated classes (compatible with **Freezed 2.x / Dart 3**) and run code generation directly from VS Code.

👉 <https://marketplace.visualstudio.com/items?itemName=mthuong.vscode-flutter-freezed-helper>

## Setup

Add the following to your `pubspec.yaml`:

```yaml
dev_dependencies:
  build_runner:
  freezed:
  json_serializable:

dependencies:
  freezed_annotation:
  json_annotation:
```

## Features

### `frf` — Setup a new file with a Freezed class

Expands to a complete file skeleton with imports, `part` directives and a model class compatible with Freezed 2.x / Dart 3:

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'my_model.freezed.dart';
part 'my_model.g.dart';

@freezed
abstract class MyModel with _$MyModel {

  const factory MyModel({
    required String id,
  }) = _MyModel;

  factory MyModel.fromJson(Map<String, dynamic> json) =>
      _$MyModelFromJson(json);
}
```

![frf](media/frf.gif)

### `frc` — Add a Freezed class

Expands to a standalone Freezed class body, useful when the file is already set up:

```dart
@freezed
abstract class MyModel with _$MyModel {

  const factory MyModel({
    required String id,
  }) = _MyModel;

  factory MyModel.fromJson(Map<String, dynamic> json) =>
      _$MyModelFromJson(json);
}
```

![frc](media/frc.gif)

### `frfp` — Setup a new file with a Freezed class with private constructor

Same as `frf` but includes `const ClassName._()`, which allows you to add custom methods and getters to the class — required by Freezed whenever you need methods (e.g. mapping a model to a domain entity):

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'my_model.freezed.dart';
part 'my_model.g.dart';

@freezed
abstract class UserModel with _$UserModel {
  const UserModel._(); // enables custom methods

  const factory UserModel({
    required String id,
  }) = _UserModel;

  factory UserModel.fromJson(Map<String, dynamic> json) =>
      _$UserModelFromJson(json);

  UserEntity toEntity() => UserEntity(id: id);
}
```

### `frcp` — Add a Freezed class with private constructor

Same as `frc` but includes `const ClassName._()`, which allows you to add custom methods and getters to the class — required by Freezed whenever you need methods (e.g. mapping a model to a domain entity):

```dart
@freezed
abstract class UserModel with _$UserModel {
  const UserModel._(); // enables custom methods

  const factory UserModel({
    required String id,
  }) = _UserModel;

  factory UserModel.fromJson(Map<String, dynamic> json) =>
      _$UserModelFromJson(json);

  UserEntity toEntity() => UserEntity(id: id);
}
```

Cursor (`$0`) is placed inside the class body, ready to write the first method.

---

### Run Code Gen

Runs `dart run build_runner build` in the workspace root.

![code gen](media/build.gif)

### Toggle Watch Mode

Starts or stops `dart run build_runner watch` to continuously regenerate code on file changes.

## Credits

The idea for this extension came from aksharpatel47's extension <https://github.com/aksharpatel47/vscode_flutter_helper>
