---
title: My windows terminal config
authors: inhere
tags:
  - terminal
  - windows-terminal
date: 2019-12-08T22:04
---

My windows terminal config

added:

- add git bash profile


<!-- more -->

## profiles

- refer https://github.com/microsoft/terminal/blob/master/doc/cascadia/SettingsSchema.md

`profiles.json`:

```json

// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation

{
    "$schema": "https://aka.ms/terminal-profiles-schema",

    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff4466}",

    "profiles":
    [
        {
            // Make changes here to the bash.exe profile
            "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff4466}",
            // icon path
            "icon": "D:\\Program Files\\Tools\\Git\\git-logo.png",
            "name": "Git Bash",
            // cursor style
            "cursorShape": "filledBox",
            "startingDirectory": "F:\\work",
            "commandline": "D:\\Program Files\\Tools\\Git\\bin\\bash.exe",
            "hidden": false
        },
        {
            // Make changes here to the powershell.exe profile
            "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
            "name": "Windows PowerShell",
            "commandline": "powershell.exe",
            "hidden": false
        },
        {
            // Make changes here to the cmd.exe profile
            "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
            "name": "cmd",
            "commandline": "cmd.exe",
            "hidden": false
        },
        {
            "guid": "{58ad8b0c-3ef8-5f4d-bc6f-13e4c00f2530}",
            "hidden": false,
            "name": "Debian",
			// cursor style
			"cursorShape": "filledBox",
            "source": "Windows.Terminal.Wsl"
        },
        {
            "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
            "hidden": false,
            "name": "Azure Cloud Shell",
            "source": "Windows.Terminal.Azure"
        }
    ],

    // Add custom color schemes to this array
    "schemes": [],

    // Add any keybinding overrides to this array.
    // To unbind a default keybinding, set the command to "unbound"
    "keybindings": []
}
```
