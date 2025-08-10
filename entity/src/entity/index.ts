import {apply, mergeWith, move, Rule, SchematicContext, template, Tree, url,} from '@angular-devkit/schematics';
import {strings} from '@angular-devkit/core';
import * as pluralize from 'pluralize';

export function entity(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const userDir = process.cwd().split("hotel-reservation-admin")[1];

    const templateSource = apply(
      url('./files'), // folder with your template files
      [
        template({
          ...strings, // provides classify, dasherize, camelize, etc.
          ..._options,
          camel: _options.name.replace(/-./g, (match: any) => match[1].toUpperCase()),
          fileName: _options.name,
          pluralize: pluralize(_options.name),
        }),
        move(userDir + '/' + _options.name), // move generated files to target folder
      ]
    );

    return mergeWith(templateSource)(tree, _context);
  };
}
