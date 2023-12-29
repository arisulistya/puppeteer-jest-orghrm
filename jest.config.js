module.exports = {
    preset: 'jest-puppeteer',
    testTimeout: 30000, // Adjust timeout as needed
    testMatch: ['**/tests/**/*.test.js'],
    globals: {
      baseUrl : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      dashboardUrl : "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
      adminUser : "Admin",
      adminPassword : "admin123",
      newAdminUser : "SarahAmalia",
      newAdminPass : "Sarah123",
      employeeName : "Paulverdo Collings",
    },
  };
  