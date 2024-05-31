addSubDomain({
  description: 'Landing Page For My Free And Open-Source Music App. This Helps Users Download My App Directly From Github with One Click.', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'melo', // desired subdomain name
  owner: {
    repo: 'https://github.com/academicgit/Melo-Landing-Page',
    email: 'academics@mailfence.com',
  },
  record: {
    CNAME: 'academicgit.github.io',
  },
})
