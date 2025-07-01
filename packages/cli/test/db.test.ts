import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { createProject, runCli } from './utils';

const model = `
model User {
    id String @id @default(cuid())
}
`;

describe('CLI db commands test', () => {
    it('should generate a database with db push', () => {
        const workDir = createProject(model);
        runCli('db push', workDir);
        expect(fs.existsSync(path.join(workDir, 'zenstack/dev.db'))).toBe(true);
    });
});
