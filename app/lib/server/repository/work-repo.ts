import { db } from "../db";

const Work = db.Work;

export const worksRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await Work.find();
}

async function getById(id: string) {
  try {
    return await Work.findById(id);
  } catch {
    throw "Work Not Found";
  }
}

async function create(params: any) {
  const work = new Work(params);

  // save work
  await work.save();
}

async function update(id: string, params: any) {
  const work = await Work.findById(id);

  if (!work) throw "Work not found";

  Object.assign(work, params);

  await work.save();
}

async function _delete(id: string) {
  await Work.findByIdAndRemove(id);
}
