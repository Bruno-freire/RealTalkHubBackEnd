import moduleAlias from 'module-alias';
import * as path from "path"

const files = path.resolve(__dirname, '../')

moduleAlias.addAliases({
  '@modules': path.join(files, 'modules'),
  '@shared': path.join(files, 'shared'),
  '@config': path.join(files, 'config'),
  '@utils': path.join(files, 'utils'),
});