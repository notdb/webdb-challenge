exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("action").insert([
    { description: "a", notes: "bb", flag: false, project_id: 1 },
    { description: "aa", notes: "bbb", flag: false, project_id: 1 },
    { description: "rtrst", notes: "bsb", flag: false, project_id: 2 },
    { description: "wfp", notes: "bkkkb", flag: false, project_id: 2 },
    { description: "a3432a", notes: "fwb", flag: false, project_id: 3 },
    { description: "kwa", notes: "bmstd", flag: false, project_id: 3 },
    { description: "a32a", notes: "bbstrb", flag: false, project_id: 4 },
    { description: "rwqa", notes: "bbbwfpb", flag: false, project_id: 4 },
    { description: "akta", notes: "b32b", flag: false, project_id: 5 },
    { description: "acva", notes: "1123bb", flag: false, project_id: 5 }
  ]);
};
