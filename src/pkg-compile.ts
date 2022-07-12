import minimist from 'minimist';
import { build, BuildOption } from '.';

export async function run() {
    const argv = minimist<BuildOption>(process.argv.slice(2), {
        boolean: ['fix', 'no-default'],
        string: ['dict', 'disable', 'ignore', 'presets'],
        alias: {
            d: 'dict',
            p: 'presets',
        },
    });
    await build(argv);
}

run().catch((error) => {
    console.error(error);
});
