import fs from 'fs';
import path from 'path';

type Environment = 'development' | 'testing' | 'production';

export function loadEnvironmentVars() {
  console.log('\n\nTrying to validate the environment type');
  const envType = process.env.NODE_ENV as any;

  if (envType === undefined) {
    console.log('No environment type specified');
    process.exit(1);
  } else {
    const validEnvironments: Environment[] = [
      'development',
      'testing',
      'production'
    ];

    if (!validEnvironments.includes(envType)) {
      console.log(
        `\nInvalid environment type: '${envType}'\nExpected one of these: ${validEnvironments.join(
          ', '
        )}`
      );
      process.exit(1);
    }

    const validatedEnvironmentType = envType as Environment;
    console.log('\x1b[32mValidated\x1b[0m');
    console.log('Environment type is:', validatedEnvironmentType);
    const fileName = `.env.${validatedEnvironmentType}`;
    const absolutePathOfFileToLookFor = path.resolve(fileName);
    const envFileExists = fs.existsSync(absolutePathOfFileToLookFor);
    console.log('env file exists:', envFileExists);

    if (envFileExists) {
      try {
        const file = fs.readFileSync(absolutePathOfFileToLookFor, 'utf-8');
        if (file.trim().length === 0) {
          console.log(`\x1b[31m${fileName} is empty\x1b[0m`);
          process.exit(1);
        } else {
          file.split('\n').forEach((line) => {
            if (line.trim().length !== 0) {
              const parts = line.trim().split('=');
              if (parts.length === 2) {
                const [key, value] = parts;
                if (key && value) process.env[key.trim()] = value.trim();
              } else {
                console.error(
                  `\x1b[31mInvalid line in ${fileName}\x1b[0m\n-----\n${line}\n-----`
                );
                process.exit(1);
              }
            }
          });
        }
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    } else {
      console.log(`${fileName} does not exist.`);
      if (validatedEnvironmentType === 'production') {
        console.log('Trying to get variables from production environment');
      } else {
        process.exit(1);
      }
    }
  }
}
