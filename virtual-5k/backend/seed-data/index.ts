import { races } from './data';

export async function insertSeedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${races.length} Races`);
  const { mongoose } = adapter;
  for (const race of races) {
    console.log(`  🛍️ Adding Race: ${race.name}`);
    const { _id } = await mongoose
      .model('RaceImage')
      .create({ image: race.photo, altText: race.description });
    race.photo = _id;
    await mongoose.model('Race').create(race);
  }
  console.log(`✅ Seed Data Inserted: ${races.length} Races`);
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`');
  process.exit();
}
