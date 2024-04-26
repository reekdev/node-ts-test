import path from 'path';
// import fs from 'fs/promises';
import fs from 'node:fs/promises'

(async function () {
  const folderToDelete = path.resolve('node_modules');
  try {
    await fs.access(folderToDelete);
    await fs.rm(folderToDelete, {
      recursive: true,
      force: true,
      maxRetries: 10,
    });
    console.log('\x1b[32mnode_modules deleted\x1b[0m');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('\x1b[31mnode_modules not found\x1b[0m');
    }
  }
})();
