#!/usr/bin/env node

const args = process.argv.slice(2);

function displayUsage() {
  console.log('Infrastructure Decision Tool');
  console.log('Usage: node infrastructure_tool.js [--help]');
}

function evaluateInfrastructureDecision(input) {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return 'No input provided. Please describe the infrastructure decision to evaluate.';
  }

  if (normalized.includes('cloud') || normalized.includes('saas')) {
    return 'Cloud-first approach appears favorable for rapid scaling and reduced operational overhead.';
  }

  if (normalized.includes('on-prem') || normalized.includes('private')) {
    return 'On-premises deployment may align with strict compliance or data residency requirements.';
  }

  return 'Decision criteria should include cost, compliance, scalability, reliability, and operational capability.';
}

if (args.includes('--help') || args.includes('-h')) {
  displayUsage();
  process.exit(0);
}

const decisionInput = args.join(' ') || 'Evaluate a new infrastructure design';
console.log(evaluateInfrastructureDecision(decisionInput));
