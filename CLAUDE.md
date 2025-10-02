# Auggie CLI Tool Restrictions and Guidelines

## User Confirmation Requirement

**IMPORTANT**: All file operations (reading, creating, editing, deleting) require explicit user confirmation through the ask-user setting in .augment/settings.json. No file operations should be performed without first asking the user for permission.

## Allowed Tools

### File Operations
- **File Reading**: Require user confirmation (ask-user) before reading any files
- **File Writing**: Require user confirmation (ask-user) before creating or editing files
- **File Deletion**: Require user confirmation (ask-user) before removing any files

### Code Analysis
- **Codebase Retrieval**: Allow searching and analyzing existing code
- **Syntax Checking**: Allow running linters and code quality tools
- **Documentation Generation**: Allow generating or updating documentation

### Development Tools
- **Package Management**: Allow npm/yarn operations for dependency management
- **Testing**: Allow running tests and test-related commands
- **Build Tools**: Allow running build scripts and compilation

### Version Control
- **Git Operations**: Allow basic git commands (status, diff, add, commit)
- **Branch Management**: Allow creating and switching branches
- **Remote Operations**: Require explicit permission for push/pull operations

## Restricted Tools

### System Operations
- **System Configuration**: Prohibit modifying system-wide settings
- **Network Configuration**: Prohibit changing network settings
- **User Management**: Prohibit creating or modifying user accounts

### Dangerous Operations
- **File System Root**: Prohibit operations outside the project directory
- **Process Management**: Prohibit killing system processes
- **Service Management**: Prohibit starting/stopping system services

### External Services
- **Cloud Deployments**: Require explicit permission before deploying
- **Database Operations**: Require confirmation for schema changes
- **API Integrations**: Require approval for external API calls

## Safety Guidelines

### Confirmation Required
Always ask for confirmation before:
- Any file operations (reading, creating, editing, deleting) via ask-user setting
- Making irreversible changes
- Modifying configuration files
- Installing new dependencies
- Committing code changes

### Best Practices
- Always request user permission via ask-user before any file operations
- Backup important files before major changes
- Test changes in development environment first
- Follow existing code style and conventions
- Document significant changes
- Use semantic commit messages

## Project-Specific Rules

### Learning Environment
- This is a learning project for Auggie CLI
- Prioritize educational value in explanations
- Show step-by-step processes when possible
- Explain the reasoning behind tool choices

### File Structure
- Maintain clean project organization
- Keep examples in appropriate subdirectories
- Update README.md when adding new features
- Follow established naming conventions

## Tool Usage Examples

### Allowed Commands
```bash
# File operations
auggie "create a new example file"
auggie "update the README with new information"

# Code analysis
auggie "analyze the code structure"
auggie "check for potential improvements"

# Development
auggie "run the tests"
auggie "install missing dependencies"
```

### Restricted Commands
```bash
# These require explicit permission
auggie "deploy to production"
auggie "delete all files"
auggie "modify system configuration"
```

## Emergency Procedures

### If Something Goes Wrong
1. Stop the current operation immediately
2. Assess the scope of changes made
3. Restore from backup if available
4. Document what happened for learning

### Recovery Steps
- Use git to revert unwanted changes
- Restore files from backup
- Reinstall dependencies if corrupted
- Seek help if system-level issues occur

## Feedback and Learning

### Encourage Exploration
- Try new Auggie CLI features safely
- Experiment with different approaches
- Document interesting discoveries
- Share learnings in the README

### Continuous Improvement
- Update these rules based on experience
- Add new tool restrictions as needed
- Refine guidelines for better safety
- Incorporate community best practices
