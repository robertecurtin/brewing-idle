var _ = require('lodash');

export default (jobs, setJobs) => {

  return {
    unlockJob: (job) => {
      console.log(`new job ${job}`);
      let newJobs = _.clone(jobs);
      newJobs[job] = true;
      setJobs(newJobs);
    }
  };
};

