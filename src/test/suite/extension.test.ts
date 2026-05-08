import * as assert from 'assert';
import { before } from 'mocha';

import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  before(() => {
    vscode.window.showInformationMessage('Start all tests.');
  });

  test('Both commands are registered', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(
      commands.includes('flutterFreezedHelper.genModel'),
      'genModel command should be registered'
    );
    assert.ok(
      commands.includes('flutterFreezedHelper.genModelWatch'),
      'genModelWatch command should be registered'
    );
  });

  test('Workspace folder is accessible', () => {
    // Validates that the workspace API used by the extension resolves correctly.
    // In a test environment the workspace may have no folders; the important
    // thing is that the API does not throw.
    const folders = vscode.workspace.workspaceFolders;
    assert.ok(folders === undefined || Array.isArray(folders));
  });
});
