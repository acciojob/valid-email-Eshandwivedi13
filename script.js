function validEmail(str) {
   // Check for empty input
    if (!str) return false;

    // Find the position of '@'
    const atIndex = str.indexOf('@');
    if (atIndex === -1 || atIndex === 0 || atIndex === str.length - 1) {
        return false; // No '@', or empty local/domain
    }

    const localPart = str.slice(0, atIndex);
    const domainPart = str.slice(atIndex + 1);

    // Check for the presence of a dot in the domain part
    const dotIndex = domainPart.lastIndexOf('.');
    if (dotIndex === -1 || dotIndex === 0 || dotIndex === domainPart.length - 1) {
        return false; // No dot, or empty domain/TLD
    }

    const topLevelDomain = domainPart.slice(dotIndex + 1);
    if (topLevelDomain.length < 2 || topLevelDomain.length > 3) {
        return false; // TLD length check
    }

    // Validate local part (no consecutive periods or hyphens, cannot start or end with them)
    for (let i = 0; i < localPart.length; i++) {
        if (localPart[i] === '.' || localPart[i] === '-') {
            if (i === 0 || i === localPart.length - 1 || localPart[i + 1] === localPart[i]) {
                return false;
            }
        }
    }

    // Validate domain part (no consecutive periods or hyphens, cannot start or end with them)
    for (let i = 0; i < domainPart.length; i++) {
        if (domainPart[i] === '.' || domainPart[i] === '-') {
            if (i === 0 || i === domainPart.length - 1 || domainPart[i + 1] === domainPart[i]) {
                return false;
            }
        }
    }

    return true;
	
}

const str = prompt("Enter an email address.");
alert(validEmail(str));
