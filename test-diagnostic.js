#!/usr/bin/env node

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n' + '='.repeat(80));
console.log('DEVDOCS GLOBAL - DIAGNOSTIC TEST');
console.log('='.repeat(80) + '\n');

// Test 1: Check .env.local
console.log('TEST 1: .env.local File');
console.log('─'.repeat(40));
const envPath = path.join(process.cwd(), '.env.local');
console.log('Looking for:', envPath);

if (fs.existsSync(envPath)) {
    console.log('✓ .env.local FOUND');
    const content = fs.readFileSync(envPath, 'utf-8').trim();
    console.log('Content:', content.substring(0, 50) + '...');
} else {
    console.log('✗ .env.local NOT FOUND');
    console.log('Current directory:', process.cwd());
    console.log('Please create .env.local file with:');
    console.log('  LINGODOTDEV_API_KEY=api_YOUR_KEY_HERE');
}

// Test 2: Check environment variable
console.log('\nTEST 2: Environment Variable');
console.log('─'.repeat(40));
const apiKey = process.env.LINGODOTDEV_API_KEY;

if (apiKey) {
    console.log('✓ LINGODOTDEV_API_KEY is SET');
    console.log('First 20 chars:', apiKey.substring(0, 20));
    console.log('Length:', apiKey.length);
    console.log('Starts with api_:', apiKey.startsWith('api_'));
} else {
    console.log('✗ LINGODOTDEV_API_KEY is NOT SET');
    console.log('Possible reasons:');
    console.log('  1. .env.local file doesn\'t exist');
    console.log('  2. Variable name is wrong in .env.local');
    console.log('  3. dotenv not installed');
}

// Test 3: Check node_modules
console.log('\nTEST 3: Required Packages');
console.log('─'.repeat(40));

const packages = [
    'dotenv',
    'commander',
    'chalk',
    'lingo.dev'
];

for (const pkg of packages) {
    const pkgPath = path.join(process.cwd(), 'node_modules', pkg);
    if (fs.existsSync(pkgPath)) {
        console.log('✓', pkg, 'installed');
    } else {
        console.log('✗', pkg, 'NOT installed');
    }
}

// Test 4: Try to import Lingo SDK
console.log('\nTEST 4: Lingo SDK Import');
console.log('─'.repeat(40));

try {
    const { LingoDotDevEngine } = await import('lingo.dev/sdk');
    console.log('✓ Lingo SDK imported successfully');

    if (apiKey) {
        console.log('\nTesting SDK initialization...');
        try {
            const engine = new LingoDotDevEngine({
                apiKey: apiKey,
                timeout: 10000
            });
            console.log('✓ SDK engine initialized');

            console.log('\nTesting API call...');
            const result = await engine.localizeText('Hello', {
                sourceLocale: 'en',
                targetLocale: 'es'
            });
            console.log('✓ Translation successful!');
            console.log('Result:', result);
        } catch (initError) {
            console.log('✗ SDK initialization failed');
            console.log('Error:', initError.message);
        }
    } else {
        console.log('⚠ Cannot test SDK (no API key)');
    }
} catch (importError) {
    console.log('✗ Cannot import Lingo SDK');
    console.log('Error:', importError.message);
    console.log('\nInstall with: npm install lingo.dev');
}

console.log('\n' + '='.repeat(80));
console.log('DIAGNOSTIC COMPLETE');
console.log('='.repeat(80) + '\n');
