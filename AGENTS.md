# AI Agent Tool Permissions and Guidelines

## Tool Access Control

### Permitted Tools

#### File System Operations
- ✅ Read files within project directory
- ✅ Create new files and directories
- ✅ Edit existing project files
- ✅ Delete files with confirmation
- ❌ Access files outside project root
- ❌ Modify system files

#### Development Environment
- ✅ Run package managers (npm, yarn, pnpm)
- ✅ Execute build scripts
- ✅ Run tests and linters
- ✅ Start development servers
- ❌ Install global packages without permission
- ❌ Modify system PATH or environment

#### Version Control
- ✅ Check git status and diff
- ✅ Stage and commit changes
- ✅ Create and switch branches
- ✅ View git history
- ❌ Push to remote without confirmation
- ❌ Force push operations
- ❌ Delete remote branches

#### Code Analysis
- ✅ Analyze code structure and patterns
- ✅ Search codebase for specific patterns
- ✅ Generate documentation
- ✅ Suggest improvements
- ✅ Identify potential bugs
- ✅ Check code quality metrics

### Restricted Operations

#### System Level
- ❌ Modify system configuration
- ❌ Install system packages
- ❌ Change user permissions
- ❌ Access system logs
- ❌ Modify network settings

#### External Services
- ❌ Deploy to production environments
- ❌ Make API calls to external services
- ❌ Access cloud resources
- ❌ Modify database schemas
- ❌ Send emails or notifications

#### Destructive Actions
- ❌ Delete multiple files without confirmation
- ❌ Truncate or drop databases
- ❌ Remove git history
- ❌ Overwrite configuration files
- ❌ Clear caches without warning

## Safety Protocols

### Confirmation Required For
1. **File Deletions**: Any operation that removes files
2. **Dependency Changes**: Installing or removing packages
3. **Configuration Updates**: Modifying config files
4. **Git Operations**: Commits, merges, or remote operations
5. **Build Changes**: Modifying build scripts or tools

### Automatic Backups
- Create backups before major file modifications
- Save git stash before experimental changes
- Document changes in commit messages
- Maintain rollback procedures

## Project Context

### Learning Environment
This project is for learning Auggie CLI and AI development tools:
- Prioritize educational explanations
- Show alternative approaches when possible
- Explain tool choices and reasoning
- Encourage safe experimentation

### Code Standards
- Follow existing code style
- Use semantic commit messages
- Maintain clean project structure
- Update documentation with changes

## Tool-Specific Guidelines

### Auggie CLI
- Use appropriate flags for different operations
- Leverage custom commands when available
- Follow workspace-specific rules
- Respect indexing permissions

### General AI Assistants
- Ask clarifying questions when uncertain
- Provide step-by-step explanations
- Suggest testing procedures
- Offer multiple solution approaches

## Error Handling

### When Things Go Wrong
1. **Stop immediately** if unexpected behavior occurs
2. **Assess damage** and document what happened
3. **Restore from backup** if available
4. **Learn from mistakes** and update guidelines

### Recovery Procedures
- Use `git reset` for unwanted commits
- Restore files from `.git` history
- Reinstall dependencies if corrupted
- Check system integrity after errors

## Monitoring and Logging

### Track Changes
- Log all file modifications
- Record command executions
- Monitor resource usage
- Document decision processes

### Review Procedures
- Regular safety guideline reviews
- Update tool permissions as needed
- Incorporate lessons learned
- Share findings with community

## Best Practices

### Before Making Changes
- Understand the current state
- Plan the modification approach
- Consider potential side effects
- Prepare rollback strategy

### During Operations
- Make incremental changes
- Test frequently
- Document progress
- Monitor for issues

### After Completion
- Verify results
- Clean up temporary files
- Update documentation
- Commit changes with clear messages

## Emergency Contacts

### If Major Issues Occur
- Stop all operations immediately
- Document the problem clearly
- Seek help from experienced developers
- Report bugs to appropriate channels

This file ensures safe and productive AI assistance while learning and experimenting with development tools.
