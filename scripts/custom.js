var models = [];

models["Clubs"] = [[
   { key: 29,   text: "Bone Club",                       color: "#0B242D",  img: "images/Bone_Club.gif" },
   { key: 30,   text: "Giant Bone Club",                 color: "#0B242D",  img: "images/Giant_Bone_Club.gif" },
   { key: 31,   text: "Stonetop Mace",                   color: "#0B242D",  img: "images/Stonetop_Mace.gif" },
   { key: 32,   text: "Stonehead",                       color: "#0B242D",  img: "images/Stonehead.png" },
   { key: 1,    text: "Basic Mace",                      color: "#0B242D",  img: "images/Basic_Mace.gif" },
   { key: 2,    text: "Basic Mace II",                   color: "#0B242D",  img: "images/Basic_Mace_II.gif" },
   { key: 3,    text: "Basic Mace III",                  color: "#0B242D",  img: "images/Basic_Mace_III.gif" },
   { key: 4,    text: "Silverspade Mace",                color: "#0B242D",  img: "images/Silverspade_Mace.gif" },
   { key: 5,    text: "Silverspade Double Mace",         color: "#0B242D",  img: "images/Silverspade_Double_Mace.gif" },
   { key: 6,    text: "Mace of Spades",                  color: "#0B242D",  img: "images/Mace_of_Spades.gif" },
   { key: 7,    text: "Studded Club",                    color: "#0B242D",  img: "images/Studded_Club.gif" },
   { key: 8,    text: "Steel Mottler",                   color: "#0B242D",  img: "images/Steel_Mottler.gif" },
   { key: 9,    text: "Steelspiked Mottler",             color: "#0B242D",  img: "images/Steelspiked_Mottler.gif" },
   { key: 10,   text: "Metal Mace",                      color: "#0B242D",  img: "images/Metal_Mace.gif" },
   { key: 11,   text: "Great Steelspiked Mottler",       color: "#0B242D",  img: "images/Great_Steelspiked_Mottler.gif" },
   { key: 12,   text: "Dark Spike",                      color: "#0B242D",  img: "images/Dark_Spike.gif" },
   { key: 13,   text: "Heavy Spiked Club",               color: "#0B242D",  img: "images/Heavy_Spiked_Club.gif" },
   { key: 14,   text: "Iron Hammer",                     color: "#0B242D",  img: "images/Iron_Hammer.gif" },
   { key: 15,   text: "Battle Hammer",                   color: "#0B242D",  img: "images/Battle_Hammer.gif" },
   { key: 16,   text: "Primal Club",                     color: "#0B242D",  img: "images/Primal_Club.gif" },
   { key: 17,   text: "Tourturer's Squelcher",           color: "#0B242D",  img: "images/Torturer's_Squelcher.gif" },
   { key: 18,   text: "Heavy Battle Hammer",             color: "#0B242D",  img: "images/Heavy_Battle_Hammer.gif" },
   { key: 19,   text: "Firmwood Hammer",                 color: "#0B242D",  img: "images/Firmwood_Hammer.gif" },
   { key: 20,   text: "Ironpeak Rockcrusher",            color: "#0B242D",  img: "images/Ironpeak_Rockcrusher.gif" },
   { key: 21,   text: "Heavy War Hammer",                color: "#0B242D",  img: "images/Heavy_War_Hammer.gif" },
   { key: 22,   text: "Ivory Club",                      color: "#0B242D",  img: "images/Ivory_Club.gif" },
   { key: 23,   text: "Ivory Stellballer",               color: "#0B242D",  img: "images/Ivory_Steelballer.png" },
   { key: 24,   text: "Metaltwister Ivory Club",         color: "#0B242D",  img: "images/Metaltwister_Ivory_Club.png" },
   { key: 25,   text: "Double Metaltwister Ivory Club",  color: "#0B242D",  img: "images/Double_Metaltwister_Ivory_Club.png" },
   { key: 26,   text: "Spiked Ivory Stellballer",        color: "#0B242D",  img: "images/Spiked_Ivory_Steelballer.png" },
   { key: 27,   text: "Corporal Swingmasher",            color: "#0B242D",  img: "images/Corporal_Swingmasher.gif" },
   { key: 28,   text: "Spiked Ivory Hard-Stellballer",   color: "#0B242D",  img: "images/Spiked_Ivory_Hard-Steelballer.png" }
 ],[
   { from: 29/*Bone Club*/,                 to: 30/*"Giant Bone Club"*/,                 ingredients: ['10x Tight Bone','8x Big Bone'] },
   { from: 31/*Stonetop Mace*/,             to: 32/*"Stonehead"*/,                       ingredients: ['6x Heavier Stone','20x Little Stone'] },
   { from: 1/*Basic Mace*/,                 to: 2/*"Basic Mace II"*/,                    ingredients: ['2x Metal Spike','4x Iron Ore'] },
   { from: 1/*Basic Mace*/,                 to: 7/*"Studded Club"*/,                     ingredients: ['3x Wood','3x Metal Spike'] },
   { from: 2/*Basic Mace II*/,              to: 3/*"Basic Mace III"*/,                   ingredients: ['3x Kalemyte Ore','3x Metal Spike', '3x Thorn', '4x Iron Ore'] },
   { from: 3/*Basic Mace III*/,             to: 4/*"Silverspade Mace"*/,                 ingredients: ['1x Metal Twist', '4x Orymine Ore', '8x Silverine Ore'] },
   { from: 4/*Silverspade Mace*/,           to: 5/*"Silverspade Double Mace"*/,          ingredients: ['2x Metal Twist', '6x Orymine Ore', '16x Silverine Ore'] },
   { from: 5/*Silverspade Double Mace*/,    to: 6/*"Mace of Spades"*/,                   ingredients: ['3x Metal Twist', '10x Orymine Ore', '50x Bola', '32x Silverine Ore'] },
   { from: 7/*Studded Club*/,               to: 8/*"Steel Mottler"*/,                    ingredients: ['2x Silverine Ore', '1x Metal Spike', '2x Piece of Steel'] },
   { from: 8/*Steel Mottler*/,              to: 9/*"Steelspiked Mottler"*/,              ingredients: ['2x Lump of Dark Matter', '2x Metal Spike', '1x Spiked Iron Ball', '4x Silverine Ore'] },
   { from: 8/*Steel Mottler*/,              to: 10/*"Metal Mace"*/,                      ingredients: ['1x Rough Branch', '1x Spiked Iron Ball', '20x Piece of Steel'] },
   { from: 9/*Steelspiked Mottler*/,        to: 11/*"Great Steelspiked Mottler"*/,       ingredients: ['4x Lump of Dark Matter', '3x Metal Spike', '2x Spiked Iron Ball', '6x Piece of Steel'] },
   { from: 11/*Great Steelspiked Mottler*/, to: 12/*"Dark Spike"*/,                      ingredients: ['10x Lump of Dark Matter', '6x Metal Spike', '1x Essence of Nightmare', '4x Spiked Iron Ball', '1x Huge Crunk of Crude Iron'] },
   { from: 7/*Studded Club*/,               to: 13/*"Heavy Spiked Club"*/,               ingredients: ['10x Brown Firm Wood', '4x Metal Spike'] },
   { from: 14/*Iron Hammer*/,               to: 15/*"Battle Hammer"*/,                   ingredients: ['20x Brassy Ore', '10x Brown Leather', '10x String'] },
   { from: 13/*Heavy Spiked Club*/,         to: 15/*"Battle Hammer"*/,                   ingredients: ['20x Brassy Ore', '10x Brown Leather', '10x String'] },
   { from: 13/*Heavy Spiked Club*/,         to: 16/*"Primal Club"*/,                     ingredients: ['8x Bunch of Brown Hair', '1x Rough Branch', '4x Frost Giant Pelt', '8x Werewolf Fur'] },
   { from: 13/*Heavy Spiked Club*/,         to: 17/*"Tourturer's Squelcher"*/,           ingredients: ['1x Huge Crunk of Crude Iron', '6x Nail', '20x Fang'] },
   { from: 15/*Battle Hammer*/,             to: 18/*"Heavy Battle Hammer"*/,             ingredients: ['30x Brassy Ore', '1x Huge Crunk of Crude Iron'] },
   { from: 18/*Heavy Battle Hammer*/,       to: 19/*"Firmwood Hammer"*/,                 ingredients: ['100x Brown Firm Wood', '1x Behemoth Claw'] },
   { from: 18/*Heavy Battle Hammer*/,       to: 20/*"Ironpeak Rockcrusher"*/,            ingredients: ['50x Iron Ore', '3x Diamond (2)'] },
   { from: 19/*Firmwood Hammer*/,           to: 21/*"Heavy War Hammer"*/,                ingredients: ['1x Huge Crunk of Crude Iron', '10x Aulorian Ore', '1x Super-polish Dust'] },
   { from: 22/*Ivory Club*/,                to: 24/*"Metaltwister Ivory Club"*/,         ingredients: ['1x Metal Twist', '3x Metal Ore'] },
   { from: 22/*Ivory Club*/,                to: 23/*"Ivory Stellballer"*/,               ingredients: ['2x Piece of Steel', '1x Spiked Iron Ball'] },
   { from: 24/*Metaltwister Ivory Club*/,   to: 25/*"Double Metaltwister Ivory Club"*/,  ingredients: ['2x Metal Twist', '8x Piece of Steel', '5x Metal Ore'] },
   { from: 23/*Ivory Stellballer*/,         to: 26/*"Spiked Ivory Stellballer"*/,        ingredients: ['5x Piece of Steel', '4x Iron Ore'] },
   { from: 26/*Spiked Ivory Stellballer*/,  to: 28/*"Spiked Ivory Hard-Stellballer"*/,   ingredients: ['4x Brassy Ore', '4x Piece of Steel', '1x Spiked Iron Ball'] },
   { from: 23/*Ivory Stellballer*/,         to: 27/*"Corporal Swingmasher"*/,            ingredients: ['15x Diamond (1)', '10x Bony Tail', '20x Pale Wood'] }
 ]];

models["Shields"] = [[
   { key: 1,    text: "Wooden Shield",                   color: "#0B242D",  img: "images/Wooden_Shield.gif" },
   { key: 2,    text: "Wood-steel Targa",                color: "#0B242D",  img: "images/Wood-steel_Targa.gif" },
   { key: 3,    text: "Studded Woodshield",              color: "#0B242D",  img: "images/Studded_Woodshield.gif" },
   { key: 4,    text: "Steel Kite",                      color: "#0B242D",  img: "images/Steel_Kite.gif" },
   { key: 5,    text: "Megasteel Shield",                color: "#0B242D",  img: "images/Megasteel_Shield.gif" },
   { key: 6,    text: "Concrete Steel Reflector",        color: "#0B242D",  img: "images/Concrete_Steel_Reflector.gif" },
   { key: 7,    text: "Spiked Woodshield",               color: "#0B242D",  img: "images/Spiked_Woodshield.gif" },
   { key: 8,    text: "Plate Shield",                    color: "#0B242D",  img: "images/Plate_Shield.gif" },
   { key: 9,    text: "Empowered Plate Shield",          color: "#0B242D",  img: "images/Empowered_Plate_Shield.gif" },
   { key: 10,   text: "Runic Plate Shield",              color: "#0B242D",  img: "images/Runic_Plate_Shield.gif" },
   { key: 11,   text: "Dark Shield",                     color: "#0B242D",  img: "images/Dark_Shield.gif" },
   { key: 12,   text: "Medusa Shield",                   color: "#0B242D",  img: "images/Medusa_Shield.gif" },
   { key: 13,   text: "Devious Shield",                  color: "#0B242D",  img: "images/Devious_Shield.gif" },
   { key: 14,   text: "Nordic Shield",                   color: "#0B242D",  img: "images/Nordic_Shield.gif" },
   { key: 15,   text: "Dragon Shield",                   color: "#0B242D",  img: "images/Dragon_Shield.gif" },
   { key: 16,   text: "Golden Plate Shield",             color: "#0B242D",  img: "images/Golden_Plate_Shield.gif" },
   { key: 17,   text: "Perseid Shield",                  color: "#0B242D",  img: "images/Perseid_Shield.gif" },
   { key: 18,   text: "Smith Shield",                    color: "#0B242D",  img: "images/Smith_Shield.gif" },

   { key: 19,   text: "Turtleshell Shield",              color: "#0B242D",  img: "images/Turtleshell_Shield.gif" },
   { key: 20,   text: "Thornshell Turtle Shield",        color: "#0B242D",  img: "images/Thornshell_Turtle_Shield.gif" },
   { key: 21,   text: "Tough Thornshell Shield",         color: "#0B242D",  img: "images/Tough_Thornshell_Shield.gif" },
   { key: 22,   text: "Spiked Thornshell Shield",        color: "#0B242D",  img: "images/Spiked_Thornshell_Shield.gif" },

   { key: 23,   text: "Bone Shield",                     color: "#0B242D",  img: "images/Bone_Shield.gif" },
   { key: 24,   text: "Tusk Shield",                     color: "#0B242D",  img: "images/Tusk_Shield.gif" },

   { key: 25,   text: "Knight Shield",                   color: "#0B242D",  img: "images/Knight_Shield.gif" },
   { key: 26,   text: "Black Knight Shield",             color: "#0B242D",  img: "images/Black_Knight_Shield.gif" }
 ],[
   { from: 1,                 to: 2,                 ingredients: ['4x Metal Ore', '4x Wood'] },
   { from: 2,                 to: 3,                 ingredients: ['5x Kalemyte Ore', '10x Brown Firm Wood', '5x Metal Spike'] },
   { from: 2,                 to: 4,                 ingredients: ['15x Piece of Steel', '5x Metal Ore'] },
   { from: 4,                 to: 5,                 ingredients: ['12x Piece of Steel', '7x Silverine Ore'] },
   { from: 5,                 to: 6,                 ingredients: ['1x Huge Crunk of Crude Iron', '50x Piece of Steel', '10x Aulorian Ore'] },
   { from: 3,                 to: 7,                 ingredients: ['6x Fang', '6x Brown Firm Wood' ] },
   { from: 3,                 to: 8,                 ingredients: ['15x Brassy Ore', '10x Pale Wood' ] },
   { from: 3,                 to: 14,                ingredients: ['2x Red Dragon Scale', '20x Brown Firm Wood', '20x Red Enchanting Dust'] },
   { from: 3,                 to: 16,                ingredients: ['5x Gold Ingot', '5x Spiked Shoulderpad', '15x Kalemyte Ore'] },
   { from: 3,                 to: 18,                ingredients: ['25x Piece of Steel', '40x Cyclops Toe', '35x Brown Firm Wood', '15x Nail'] },
   { from: 8,                 to: 9,                 ingredients: ['15x Brassy Ore', '8x Lump of Earth', '10x Pelvis Bone'] },
   { from: 8,                 to: 10,                ingredients: ['20x Brassy Ore', '6x Pale Wood', '10x Lump of Earth'] },
   { from: 9,                 to: 11,                ingredients: ['50x Lump of Dark Matter', '16x Orymine Ore', '2x Long Horn'] },
   { from: 9,                 to: 12,                ingredients: ['2x Giant Eye', '25x Strand of Medusa Hair', '60x Eye', '20x Mord Ore', '50x Brassy Ore'] },
   { from: 10,                to: 11,                ingredients: ['50x Lump of Dark Matter', '16x Orymine Ore', '2x Long Horn'] },
   { from: 10,                to: 12,                ingredients: ['2x Giant Eye', '25x Strand of Medusa Hair', '60x Eye', '20x Mord Ore', '50x Brassy Ore'] },
   { from: 11,                to: 13,                ingredients: ['20x Stone Wing', '20x Gold Ingot', '30x Mord Ore', '50x Lump of Dark Matter'] },
   { from: 14,                to: 15,                ingredients: ['30x Red Dragon Scale', '4x Orymine Ore', '10x Red Leather', '1x Topaz (3)'] },
   { from: 16,                to: 17,                ingredients: ['10x Essence of Wonder', '2x Sapphire (3)', '4x Gold Ingot', '10x Mord Ore', '2x Turquoise (3)'] },

   { from: 19,                to: 20,                ingredients: ['20x Turtle Shell', '10x Thorn' ] },
   { from: 20,                to: 21,                ingredients: ['20x Thorn', '35x Turtle Shell', '20x Crocodile Leather' ] },
   { from: 21,                to: 22,                ingredients: ['40x Thorn', '50x Turtle Shell', '40x Crocodile Leather', '1x Heap of Pollen Powder' ] },

   { from: 23,                to: 24,                ingredients: ['20x Striped Fur', '20x Tusk', '20x Spiked Shoulderpad' ] },

   { from: 25,                to: 26,                ingredients: ['30x Lump of Dark Matter', '100x Demonic Essence', '3x Distorded Lump of Darkness' ] }
 ]];

 models["Armors"] = [[
  { key: 1,    text: "Leather Jacket",                   color: "#0B242D",  img: "images/Leather_Jacket.gif" },
  { key: 2,    text: "Leather Brigandine",               color: "#0B242D",  img: "images/Leather_Brigandine.gif" },
  { key: 3,    text: "Raincoat",                         color: "#0B242D",  img: "images/Raincoat.gif" },
  { key: 4,    text: "Red Robe",                         color: "#0B242D",  img: "images/Red_Robe.gif" },
  { key: 5,    text: "Green Tunic",                      color: "#0B242D",  img: "images/Green_Tunic.gif" },
  { key: 6,    text: "Red Tunic",                        color: "#0B242D",  img: "images/Red_Tunic.gif" },
  { key: 7,    text: "Mage's Robe",                      color: "#0B242D",  img: "images/Mage's_Robe.gif" },
  { key: 8,    text: "Tight Red Beater",                 color: "#0B242D",  img: "images/Tight_Red_Beater.gif" },
  { key: 9,    text: "Hunter Coat",                      color: "#0B242D",  img: "images/Hunter_Coat.gif" },
  { key: 10,   text: "Blue Cape",                        color: "#0B242D",  img: "images/Blue_Cape.gif" },
  { key: 11,   text: "Valquinor Gown",                   color: "#0B242D",  img: "images/Valquinor_Gown.gif" },
  { key: 12,   text: "Solemn Dress",                     color: "#0B242D",  img: "images/Solemn_Dress.gif" },
  { key: 13,   text: "Studded Oak-wood Armor",           color: "#0B242D",  img: "images/Studded_Oak-wood_Armor.gif" },
  { key: 14,   text: "Ranger Armor",                     color: "#0B242D",  img: "images/Ranger_Armor.gif" },
  { key: 15,   text: "Saphid Doublet of Caretaking",     color: "#0B242D",  img: "images/Saphid_Doublet_of_Caretaking.gif" },
  { key: 16,   text: "Saphid Doublet of Furor",          color: "#0B242D",  img: "images/Saphid_Doublet_of_Furor.gif" },
  { key: 17,   text: "Lovely Dress",                     color: "#0B242D",  img: "images/Lovely_Dress.gif" },
  { key: 18,   text: "Seal-belt Sash",                   color: "#0B242D",  img: "images/Seal-belt_Sash.gif" },
  { key: 19,   text: "Lead-belt Bucklestrap",            color: "#0B242D",  img: "images/Lead-belt_Bucklestrap.gif" },
  { key: 20,   text: "Chain Mail",                       color: "#0B242D",  img: "images/Chain_Mail.gif" },
  { key: 22,   text: "Majestic Red Coat",                color: "#0B242D",  img: "images/Majestic_Red_Coat.gif" },
  { key: 23,   text: "Death Robe",                       color: "#0B242D",  img: "images/Death_Robe.gif" },
  { key: 25,   text: "Golden Chain Mail",                color: "#0B242D",  img: "images/Golden_Chain_Mail.gif" },
  { key: 26,   text: "Chain Armor",                      color: "#0B242D",  img: "images/Chain_Armor.gif" },
  { key: 27,   text: "Brown Torso Piece",                color: "#0B242D",  img: "images/Brown_Torso_Piece.gif" },
  { key: 28,   text: "Caster Robe",                      color: "#0B242D",  img: "images/Caster_Robe.gif" },
  { key: 29,   text: "Brown Armor",                      color: "#0B242D",  img: "images/Brown_Armor.gif" },
  { key: 30,   text: "Heavy Metal-chain Armor",          color: "#0B242D",  img: "images/Heavy_Metal-chain_Armor.gif" },
  { key: 31,   text: "Brown-steel Armor",                color: "#0B242D",  img: "images/Brown-steel_Armor.gif" },
  { key: 32,   text: "Furry Cape",                       color: "#0B242D",  img: "images/Furry_Cape.gif" },
  { key: 33,   text: "Witherearth Cape",                 color: "#0B242D",  img: "images/Witherearth_Cape.gif" },
  { key: 36,   text: "Elvish Brocade Armor",             color: "#0B242D",  img: "images/Elvish_Brocade_Armor.gif" },
  { key: 37,   text: "Earthplate Armor",                 color: "#0B242D",  img: "images/Earthplate_Armor.gif" },
  { key: 38,   text: "Robe of the Lakes",                color: "#0B242D",  img: "images/Robe_of_the_Lakes.gif" },
  { key: 39,   text: "Marquis Cloak",                    color: "#0B242D",  img: "images/Marquis_Cloak.gif" },
  { key: 40,   text: "Belted Cape",                      color: "#0B242D",  img: "images/Belted_Cape.gif" },
  { key: 41,   text: "Robe of Furor",                    color: "#0B242D",  img: "images/Robe_of_Furor.gif" },
  { key: 42,   text: "Bloodred Mail",                    color: "#0B242D",  img: "images/Bloodred_Mail.gif" },
  { key: 43,   text: "Amour Robe",                       color: "#0B242D",  img: "images/Amour_Robe.gif" },
  { key: 44,   text: "Prince Armor",                     color: "#0B242D",  img: "images/Prince_Armor.gif" },
  { key: 45,   text: "Scavenger Coat",                   color: "#0B242D",  img: "images/Scavenger_Coat.gif" },
  { key: 46,   text: "Lightning Robe",                   color: "#0B242D",  img: "images/Lightning_Robe.gif" },
  { key: 47,   text: "Magma Coat",                       color: "#0B242D",  img: "images/Magma_Coat.gif" },
  { key: 48,   text: "Glacier Robe",                     color: "#0B242D",  img: "images/Glacier_Robe.gif" },
  { key: 49,   text: "Terra Mantle",                     color: "#0B242D",  img: "images/Terra_Mantle.gif" },
  { key: 50,   text: "Robe of Clarity",                  color: "#0B242D",  img: "images/Robe_of_Clarity.gif" },
  { key: 51,   text: "Fur Plate",                        color: "#0B242D",  img: "images/Fur_Plate.gif" },
  { key: 52,   text: "Dark Armor",                       color: "#0B242D",  img: "images/Dark_Armor.gif" },
  { key: 53,   text: "Greenscale Armor",                 color: "#0B242D",  img: "images/Greenscale_Armor.gif" },
  { key: 54,   text: "Torturescale Cloak",               color: "#0B242D",  img: "images/Torturescale_Cloak.gif" },
  { key: 55,   text: "Earthplate Guardian",              color: "#0B242D",  img: "images/Earthplate_Guardian.gif" },
  { key: 56,   text: "Rubidian Robe",                    color: "#0B242D",  img: "images/Rubidian_Robe.gif" },
  { key: 57,   text: "Velvet Mantle",                    color: "#0B242D",  img: "images/Velvet_Mantle.gif" },
  { key: 58,   text: "Black Plate Armor",                color: "#0B242D",  img: "images/Black_Plate_Armor.gif" },
  { key: 59,   text: "Ultimate Furian Armor",            color: "#0B242D",  img: "images/Ultimate_Furian_Armor.gif" },
  { key: 60,   text: "Bloodforged Valor Armor",          color: "#0B242D",  img: "images/Bloodforged_Valor_Armor.gif" },
  { key: 61,   text: "Great Forestlurker Coat",          color: "#0B242D",  img: "images/Great_Forestlurker_Coat.gif" },
  { key: 62,   text: "Steelfighter Tank",                color: "#0B242D",  img: "images/Steelfighter_Tank.gif" },
  { key: 63,   text: "Deathbringer Cape",                color: "#0B242D",  img: "images/Deathbringer_Cape.gif" },
  { key: 64,   text: "Sharpeye Armor",                   color: "#0B242D",  img: "images/Sharpeye_Armor.gif" },
  { key: 65,   text: "Oceanlord Robe",                   color: "#0B242D",  img: "images/Oceanlord_Robe.gif" },
  { key: 66,   text: "Swiftlord Mantle",                 color: "#0B242D",  img: "images/Swiftlord_Mantle.gif" },
  { key: 67,   text: "Full Metal Plate",                 color: "#0B242D",  img: "images/Full_Metal_Plate.gif" },
  { key: 68,   text: "Devious Armor",                    color: "#0B242D",  img: "images/Devious_Armor.gif" },
  { key: 69,   text: "Scaled Earthplate Guardian",       color: "#0B242D",  img: "images/Scaled_Earthplate_Guardian.gif" },
  { key: 70,   text: "Greyshade Armor",                  color: "#0B242D",  img: "images/Greyshade_Armor.gif" },
  { key: 71,   text: "Dragon Robe",                      color: "#0B242D",  img: "images/Dragon_Robe.gif" },
  { key: 72,   text: "Titansteel Armor",                 color: "#0B242D",  img: "images/Titansteel_Armor.gif" },
  { key: 73,   text: "Marksman Cape",                    color: "#0B242D",  img: "images/Marksman_Cape.gif" },
  { key: 74,   text: "Dark Ravenfeather Dress",          color: "#0B242D",  img: "images/Dark_Ravenfeather_Dress.gif" },
  { key: 75,   text: "Skullbelted Necromant Robe",       color: "#0B242D",  img: "images/Skullbelted_Necromant_Robe.gif" },
  { key: 76,   text: "Neorobe of the Elven Realms",      color: "#0B242D",  img: "images/Neorobe_of_the_Elven_Realms.gif" },
  { key: 77,   text: "Dreadskull Plate",                 color: "#0B242D",  img: "images/Dreadskull_Plate.gif" },
  { key: 78,   text: "Dragon Scale Mail",                color: "#0B242D",  img: "images/Dragon_Scale_Mail.gif" },
  { key: 79,   text: "Magma Titan Armor",                color: "#0B242D",  img: "images/Magma_Titan_Armor.gif" },
  { key: 80,   text: "Bloodbone Cape",                   color: "#0B242D",  img: "images/Bloodbone_Cape.gif" },
  { key: 81,   text: "Dark Champion Armor",              color: "#0B242D",  img: "images/Dark_Champion_Armor.gif" },
  { key: 82,   text: "Sniper Cape",                      color: "#0B242D",  img: "images/Sniper_Cape.gif" },
  { key: 83,   text: "Dreadprince Armor",                color: "#0B242D",  img: "images/Dreadprince_Armor.gif" },
  { key: 84,   text: "Dreadskull Cape",                  color: "#0B242D",  img: "images/Dreadskull_Cape.gif" },
  { key: 85,   text: "Wingardium Armor",                 color: "#0B242D",  img: "images/Wingardium_Armor.gif" },
  { key: 86,   text: "Nightmare Armor",                  color: "#0B242D",  img: "images/Nightmare_Armor.gif" },
  { key: 90,   text: "Furian Armor",                     color: "#0B242D",  img: "images/Furian_Armor.gif" }
 ],[
  { from: 1,                  to: 2,                 ingredients: ['2x Brown Piece of Cloth', '2x String'] },
  { from: 1,                  to: 3,                 ingredients: ['3x Blue Piece of Cloth'] },
  { from: 1,                  to: 4,                 ingredients: ['5x Red Piece of Cloth', '2x Crab Pincers'] },
  { from: 1,                  to: 5,                 ingredients: ['4x Green Piece of Cloth', '3x Soft Green Leather'] },
  { from: 1,                  to: 6,                 ingredients: ['5x Red Piece of Cloth', '2x String'] },
  { from: 2,                  to: 7,                 ingredients: ['4x Red Enchanting Dust', '5x Red Piece of Cloth'] },
  { from: 4,                  to: 8,                 ingredients: ['3x Bunch of Red Hair', '5x Red Piece of Cloth', '4x Bloody Pincer'] },
  { from: 3,                  to: 9,                 ingredients: ['3x Soft Green Leather', '3x Brown Piece of Cloth'] },
  { from: 2,                  to: 10,                ingredients: ['4x Blue Enchanting Dust', '5x Blue Piece of Cloth'] },
  { from: 5,                  to: 11,                ingredients: ['9x Green Piece of Cloth', '3x Small Tissue', '4x Green Contour Feather'] },
  { from: 2,                  to: 12,                ingredients: ['10x White Feather', '5x White Piece of Cloth', '4x Spider Silk'] },
  { from: 2,                  to: 13,                ingredients: ['4x Iron Ore', '4x Metal Ore', '5x Brown Firm Wood'] },
  { from: 9,                  to: 14,                ingredients: ['5x Green Contour Feather', '15x Piece of Steel', '8x Rough Branch', '13x Fang'] },
  { from: 10,                 to: 15,                ingredients: ['3x Blue Enchanting Dust', '5x Blue Piece of Cloth', '1x Small Sapphire'] },
  { from: 7,                  to: 16,                ingredients: ['3x Red Enchanting Dust', '2x Yellow Piece of Cloth', '1x Small Sapphire', '3x Red Piece of Cloth'] },
  { from: 2,                  to: 17,                ingredients: ['4x Red Piece of Cloth', '15x String', '2x Wool'] },
  { from: 9,                  to: 18,                ingredients: ['4x Brassy Ore', '6x String'] },
  { from: 13,                 to: 19,                ingredients: ['2x Heavier Stone', '7x Tarnite Ore'] },
  { from: 9,                  to: 20,                ingredients: ['3x Metal Twist'] },
  { from: 13,                 to: 20,                ingredients: ['3x Metal Twist'] },
  { from: 6,                  to: 22,                ingredients: ['30x Brown Piece of Cloth', '5x Crimson Red Feather', '8x Acorn', '15x Striped Fur'] },
  { from: 7,                  to: 23,                ingredients: ['15x Stack of Dark Hair', '20x Fur', '2x Skull'] },
  { from: 10,                 to: 23,                ingredients: ['15x Stack of Dark Hair', '20x Fur', '2x Skull'] },
  { from: 20,                 to: 25,                ingredients: ['3x Gold Ingot'] },
  { from: 20,                 to: 26,                ingredients: ['6x Brassy Ore', '3x String', '2x Metal Twist'] },
  { from: 19,                 to: 27,                ingredients: ['10x Iron Ore', '8x Brown Piece of Cloth'] },
  { from: 12,                 to: 28,                ingredients: ['3x Sapphire (1)', '9x Blue Piece of Cloth', '5x Blue Enchanting Dust'] },
  { from: 27,                 to: 29,                ingredients: ['2x Brown Piece of Cloth', '2x Piece of Shoulder Armor', '8x Metal Ore'] },
  { from: 26,                 to: 30,                ingredients: ['4x Metal Twist', '2x String', '3x Metal Spike'] },
  { from: 29,                 to: 31,                ingredients: ['5x Brown Piece of Cloth', '3x Metal Spike', '6x Metal Ore', '4x String'] },
  { from: 13,                 to: 32,                ingredients: ['20x Bunch of Brown Hair', '5x String', '25x Brown Fur', '3x Warmfur Pelt'] },
  { from: 16,                 to: 33,                ingredients: ['1x Yellow Tapestry', '20x River Plant Leaf', '25x Swamp Grass'] },
  { from: 15,                 to: 33,                ingredients: ['1x Yellow Tapestry', '20x River Plant Leaf', '25x Swamp Grass'] },
  { from: 9,                  to: 33,                ingredients: ['1x Yellow Tapestry', '20x River Plant Leaf', '25x Swamp Grass'] },
  { from: 14,                 to: 36,                ingredients: ['30x Brown Leather', '40x Green Piece of Cloth', '1x Gold Ingot', '10x Bola', '10x Green Contour Feather'] },
  { from: 19,                 to: 37,                ingredients: ['40x Brassy Ore', '10x Pale Wood', '15x Lump of Earth'] },
  { from: 15,                 to: 38,                ingredients: ['1x Rubinite Ore', '10x Small Tissue', '20x Essence of Wonder', '30x Stack of Dark Hair'] },
  { from: 23,                 to: 39,                ingredients: ['5x Spool of Yarn', '25x Lump of Dark Matter', '20x Tarnite Ore', '5x Bola'] },
  { from: 32,                 to: 40,                ingredients: ['10x Warmfur Pelt', '1x Orange Tapestry', '25x Yellow Piece of Cloth', '25x Piece of Shoulder Armor'] },
  { from: 16,                 to: 41,                ingredients: ['5x Rubinite Ore', '30x Red Piece of Cloth', '40x Bunch of Red Hair', '20x Bloody Pincer'] },
  { from: 8,                  to: 42,                ingredients: ['2x Rubinite Ore', '5x Red Piece of Cloth', '15x Bunch of Red Hair', '14x Kalemyte Ore'] },
  { from: 17,                 to: 43,                ingredients: ['2x Essence of Wonder', '22x Red Piece of Cloth', '30x Red Enchanting Dust', '1x Vanan Ore'] },
  { from: 22,                 to: 44,                ingredients: ['4x Super-polish Dust', '1x Velvet Tapestry', '20x Golden Shoulderplate', '15x Gold Ingot', '40x Mord Ore'] },
  { from: 36,                 to: 45,                ingredients: ['40x Small Tissue', '10x Brown Fur', '10x Warmfur Pelt', '50x Green Mushroom', '100x Earthcrawlers Insides'] },
  { from: 28,                 to: 46,                ingredients: ['1x Ultraenergetic Wand', '25x Vanan Ore', '10x Pile of Mana Dust'] },
  { from: 41,                 to: 47,                ingredients: ['1x Big Flask of Oil', '5x Dust of Hatred', '10x Red Leather', '15x Rubinite Ore', '5x Orymine Ore'] },
  { from: 28,                 to: 48,                ingredients: ['1x Waterhold Scepter', '1x Shard', '25x Aqualus Ore'] },
  { from: 33,                 to: 49,                ingredients: ['35x Lump of Earth', '13x Brown Leather', '2x Quimp Ore', '10x Piece of Shoulder Armor'] },
  { from: 38,                 to: 50,                ingredients: ['15x Aqualus Ore', '35x Arcanic Dust', '20x Blue Piece of Cloth'] },
  { from: 40,                 to: 51,                ingredients: ['45x Brassy Ore', '100x Bunch of Brown Hair', '30x Striped Fur', '12x Warmfur Pelt'] },
  { from: 37,                 to: 52,                ingredients: ['10x Lump of Dark Matter', '2x Aulorian Ore', '25x Thorn', '4x Stone Wing'] },
  { from: 33,                 to: 53,                ingredients: ['40x Green Contour Feather', '25x Green Dragon Scale', '30x Crocodile Leather'] },
  { from: 39,                 to: 54,                ingredients: ['45x Pelvis Bone', '8x Diamond (1)', '40x Metal Ore Bone Amulet'] },
  { from: 37,                 to: 55,                ingredients: ['55x Brassy Ore', '75x Iron Ore', '4x Metal Spike', '12x Spiked Shoulderpad'] },
  { from: 47,                 to: 56,                ingredients: ['1x Red tapestry', '40x Bat Wing', '35x Cursed Growth', '3x Ruby (3)', '15x Striped Fur'] },
  { from: 43,                 to: 57,                ingredients: ['15x Rubinite Ore', '45x Stack of Dark Hair', '15x Pile of Mana Dust', '15x Essence of Wonder'] },
  { from: 52,                 to: 58,                ingredients: ['45x Metal Ore', '1x Black Ring', '12x Black Pearl', '3x Distorted Lump of Darkness', '4x Mord Ore'] },
  { from: 90,                 to: 59,                ingredients: ['10x Super-polish Dust', '80x Piece of Steel', '50x Gold Ingot', '50x Silverine Ore', '100x Kalemyte Ore'] },
  { from: 42,                 to: 60,                ingredients: ['15x Dust of Hatred', '1x Orymine Ore', '10x Acorn', '30x Rubinite Ore', '8x Red Dragon Scale'] },
  { from: 45,                 to: 61,                ingredients: ['100x Lump of Earth', '1x Sniper Gloves', '70x Swamp Grass', '18x Piece of Shoulder Armor'] },
  { from: 58,                 to: 62,                ingredients: ['16x Stone Wing', '1x Fighting Spirit', '11x Mord Ore'] },
  { from: 54,                 to: 63,                ingredients: ['50x Lump of Dark Matter', '35x Tome of Dark Power', '25x Mord Ore', '50x Spool of Yarn', '15x Gauze Bandage'] },
  { from: 53,                 to: 64,                ingredients: ['45x Brassy Ore', '50x Lizard Scale', '4x Long Horn', '13x Small Tissue'] },
  { from: 50,                 to: 65,                ingredients: ['40x Fish Fin', '70x Pile of Mana Dust', '40x Blue Enchanting Dust', '1x Blue Tapestry', '30x Arcanic Dust'] },
  { from: 49,                 to: 66,                ingredients: ['15x Quimp Ore', '30x Meeple Earflap', '4x Mord Ore', '25x Brown Firm Wood', '50x Brown Leather'] },
  { from: 30,                 to: 67,                ingredients: ['80x Iron Ore', '100x Metal Ore', '40x Brassy Ore', '20x Piece of Steel', '60x Kalemyte Ore'] },
  { from: 58,                 to: 68,                ingredients: ['70x Lump of Dark Matter', '90x Dark Mushroom', '18x Mord Ore', '10x Gold Ingot'] },
  { from: 55,                 to: 69,                ingredients: ['33x Green Dragon Scale', '40x Brassy Ore', '15x Green Leather', '25x Aulorian Ore', '60x Lump of Earth'] },
  { from: 58,                 to: 70,                ingredients: ['60x Lump of Dark Matter', '40x Piece of Steel', '50x Fur', '1x Blood Ring', '20x Yellow Piece of Cloth', '35x Stack of Dark Hair'] },
  { from: 56,                 to: 71,                ingredients: ['30x Red Dragon Scale', '50x Green Dragon Scale', '1x Eternal Flames', '1x Firebender Amulet'] },
  { from: 62,                 to: 72,                ingredients: ['1x Huge Chunk of Crude Iron', '24x Werewolf Fur', '31x Lump of Dark Matter', '15x Mord Ore', '15x Aulorian Ore', '11x Bony Tail'] },
  { from: 64,                 to: 73,                ingredients: ['40x Shimmering Green Dust', '45x Silverine Ore', '25x Mord Ore', '100x River Plant Leaf', '25x Green Piece of Cloth'] },
  { from: 70,                 to: 74,                ingredients: ['100x Dark Feather', '5x Bony Tail', '30x Stone Wing', '20x Werewolf Fur', '15x Fur'] },
  { from: 63,                 to: 75,                ingredients: ['70x Dark Feather', '10x Silverine Ore', '2x Distorted Lump of Darkness', '40x Skull Belt', '20x Book of Necromantic Rituals'] },
  { from: 65,                 to: 76,                ingredients: ['3x Turquoise (3)', '100x Arcanic Dust', 'Hourglass of the Magi', '10x Gold Ingot', '35x Blue Piece of Cloth', '15x Aulorian Ore', '100x Aqualus Ore'] },
  { from: 72,                 to: 77,                ingredients: ['1x Black Skull', '1x Relic (1) - DI', '10x Orymine Ore', '30x Skull', '100x Lump of Dark Matter'] },
  { from: 61,                 to: 78,                ingredients: ['1x Emerald (6)', '30x Gold Ingot', '100x Green Leather', '1x Dragon Egg', '70x Green Dragon Scale'] },
  { from: 60,                 to: 79,                ingredients: ['1x Magma Amulet', '10x Long Horn', '1x Dragon Claw', '50x Rubinite Ore', '30x Dust of Doom'] },
  { from: 44,                 to: 80,                ingredients: ['50x Shreds of Red', '20x Spiked Shoulderpad', '30x Dust of Hatred', '15x Dust of Doom', '1x Eltharic Goatskull', '5x Lions Mane'] },
  { from: 68,                 to: 81,                ingredients: ['30x Lump of Dark Matter', '15x Super-polish Dust', '14x Bony Tail', '20x Gold Ingot', '25x Distorted Lump of Darkness', '20x Spool of Yarn', '5x Behemoth Claw'] },
  { from: 73,                 to: 82,                ingredients: ['1x Neutral Matter', '40x Soft Green Leather', '100x Handful of Swamp Mucus', '100x Set of Skewered Insect Wings', '15x Orymine Ore'] },
  { from: 44,                 to: 83,                ingredients: ['100x Cursed Growth', '50x Spiked Shoulderpad', '55x Book of Necromantic Rituals', '25x Distorted Lump of Darkness', '40x Orymine Ore', '70x Scytheblade'] },
  { from: 63,                 to: 84,                ingredients: ['45x Lump of Dark Matter', '25x Dust of Hatred', '50x Book of Necromantic Rituals', '1x Black Skull', '25x Skull', '10x Orymine Ore'] },
  { from: 78,                 to: 85,                ingredients: ['1x Ruby (3)', '100x Lizard Scale', '1x Emerald (5)', '100x Crocodile Leather'] },
  { from: 81,                 to: 86,                ingredients: ['100x Cursed Growth', '100x Spiked Iron Ball', '30x Tome of Dark Power', '100x Lump of Dark Matter', '1x Essence of a Nightmare', '60x Distorted Lump of Darkness', '30x Orymine Ore', '1x Huge Chunk of Crude Iron'] }
 ]];


// Load this model on site entry
var nodeArray = models["Armors"][0];
var linkDataArray = models["Armors"][1];

$( document ).ready(function() {

    var $ = go.GraphObject.make;  // for conciseness in defining templates

    function ArrangedLayeredDigraphLayout() {
      go.LayeredDigraphLayout.call(this);
      this.arrangementSpacing = 50;  // some space between the sub graphs
    }
    go.Diagram.inherit(ArrangedLayeredDigraphLayout, go.LayeredDigraphLayout);

    ArrangedLayeredDigraphLayout.prototype.doLayout = function(coll) {
      var net = this.makeNetwork(coll);
      var subnets = net.splitIntoSubNetworks();
      var initorig = this.arrangementOrigin.copy();
      var orig = this.initialOrigin(initorig).copy();
      var diagram = this.diagram;
      diagram.startTransaction();
      // layout each subnetwork
      // you could sort these in a different order, if you like
      var lay = this;
      subnets.each(function(n) {
        lay.network = n;
        lay.arrangementOrigin = orig;
        go.LayeredDigraphLayout.prototype.doLayout.call(lay, coll);
        var bnds = diagram.computePartsBounds(n.findAllParts());
        if (lay.direction === 0 || lay.direction === 180) {
          orig.y += bnds.height + lay.arrangementSpacing;
        } else {
          orig.x += bnds.width + lay.arrangementSpacing;
        }
      })
      // now layout any singleton nodes left over from splitIntoSubNetworks()
      // you could also sort these in a different order
      net.vertexes.each(function(v) {
        var node = v.node;
        if (node !== null) {
          node.move(orig);
          var bnds = node.actualBounds;
          if (lay.direction === 0 || lay.direction === 180) {
            orig.y += bnds.height + lay.arrangementSpacing;
          } else {
            orig.x += bnds.width + lay.arrangementSpacing;
          }
        }
      });
      this.arrangementOrigin = initorig;
      diagram.commitTransaction("ArrangedLayeredDigraphLayout");
    };

    myDiagram =
      $(go.Diagram, "myDiagramDiv", // must be the ID or reference to div
        {
          initialAutoScale: go.Diagram.UniformToFill,
          padding: 10,
          contentAlignment: go.Spot.Center,
          maxSelectionCount: 2
        });

    myDiagram.layout = new ArrangedLayeredDigraphLayout();
    myDiagram.layout.direction = 90;

    // define the Node template
    myDiagram.nodeTemplate =
      $(go.Node, "Horizontal",
        { locationSpot: go.Spot.Center,  // Node.location is the center of the Shape
          locationObjectName: "SHAPE",
          selectionAdorned: false,
          selectionChanged: nodeSelectionChanged },          
        $(go.Panel, "Auto",
          $(go.Shape, "RoundedRectangle",
            { name: "SHAPE",
              fill: "lightgray",  // default value, but also data-bound
              stroke: "transparent",  // modified by highlighting
              strokeWidth: 2,
              desiredSize: new go.Size(50, 35),
              portId: "" },  // so links will go to the shape, not the whole node
            new go.Binding("fill", "isSelected", function(s, obj) { return s ? "#1E90FF" : obj.part.data.color; }).ofObject()),
          $(go.Picture,
            { margin: 10, width: 32, height: 32 },
            new go.Binding("source", "img"))
          // ,$(go.TextBlock,
          //   new go.Binding("text", "distance", function(d) { if (d === Infinity) return "No Path"; else return d | 0; }), { stroke: "white" })
        ),
        $(go.TextBlock,
          new go.Binding("text")));

    // define the Link template
    myDiagram.linkTemplate =
      $(go.Link,
        {
          selectable: false,      // links cannot be selected by the user
          curve: go.Link.Orthogonal,
          layerName: "Background"  // don't cross in front of any nodes
        },
        $(go.Shape,  // this shape only shows when it isHighlighted
          { isPanelMain: true, stroke: null, strokeWidth: 5 },
          new go.Binding("stroke", "isHighlighted", function(h) { return h ? "#1E90FF" : null; }).ofObject()),
        $(go.Shape,
          // mark each Shape to get the link geometry with isPanelMain: true
          { isPanelMain: true, stroke: "black", strokeWidth: 1 },
          new go.Binding("stroke", "color")),
        $(go.Shape, { toArrow: "Standard" })
      );

    // Override the clickSelectingTool's standardMouseSelect
    // If less than 2 nodes are selected, always add to the selection
    myDiagram.toolManager.clickSelectingTool.standardMouseSelect = function() {
      var diagram = this.diagram;
      if (diagram === null || !diagram.allowSelect) return;
      var e = diagram.lastInput;
      var count = diagram.selection.count;
      var curobj = diagram.findPartAt(e.documentPoint, false);
      if (curobj !== null) {
        if (count < 2) {  // add the part to the selection
          if (!curobj.isSelected) {
            var part = curobj;
            if (part !== null) part.isSelected = true;
          }
        } else {
          if (!curobj.isSelected) {
            var part = curobj;
            if (part !== null) diagram.select(part);
          }
        }
      } else if (e.left && !(e.control || e.meta) && !e.shift) {
        // left click on background with no modifier: clear selection
        diagram.clearSelection();
      }
    }

    // select two nodes that connect from the first one to the second one
    var num = myDiagram.model.nodeDataArray.length;
    var node1 = null;
    var node2 = null;
    for (var i = 0; i < num; i++) {
      node1 = myDiagram.findNodeForKey(i);
      var distances = findDistances(node1);
      for (var j = 0; j < num; j++) {
        node2 = myDiagram.findNodeForKey(j);
        var dist = distances.getValue(node2);
        if (dist > 1 && dist < Infinity) {
          node1.isSelected = true;
          node2.isSelected = true;
          break;
        }
      }
      if (myDiagram.selection.count > 0) break;
    }
    // Generate graph  
    myDiagram.model = new go.GraphLinksModel(nodeArray, linkDataArray);

  // There are three bits of functionality here:
  // 1: findDistances(Node) computes the distance of each Node from the given Node.
  //    This function is used by showDistances to update the model data.
  // 2: findShortestPath(Node, Node) finds a shortest path from one Node to another.
  //    This uses findDistances.  This is used by highlightShortestPath.
  // 3: collectAllPaths(Node, Node) produces a collection of all paths from one Node to another.
  //    This is used by listAllPaths.  The result is remembered in a global variable
  //    which is used by highlightSelectedPath.  This does not depend on findDistances.

  var pathArray = [];
  var ingredientsArray = [];

  // Returns a Map of Nodes with distance values from the given source Node.
  // Assumes all links are unidirectional.
  function findDistances(source) {
    var diagram = source.diagram;
    // keep track of distances from the source node
    var distances = new go.Map(go.Node, "number");
    // all nodes start with distance Infinity
    var nit = diagram.nodes;
    while (nit.next()) {
      var n = nit.value;
      distances.add(n, Infinity);
    }
    // the source node starts with distance 0
    distances.add(source, 0);
    // keep track of nodes for which we have set a non-Infinity distance,
    // but which we have not yet finished examining
    var seen = new go.Set(go.Node);
    seen.add(source);

    // keep track of nodes we have finished examining;
    // this avoids unnecessary traversals and helps keep the SEEN collection small
    var finished = new go.Set(go.Node);
    while (seen.count > 0) {
      // look at the unfinished node with the shortest distance so far
      var least = leastNode(seen, distances);
      var leastdist = distances.getValue(least);
      // by the end of this loop we will have finished examining this LEAST node
      seen.remove(least);
      finished.add(least);
      // look at all Links connected with this node
      var it = least.findLinksOutOf();
      while (it.next()) {
        var link = it.value;
        var neighbor = link.getOtherNode(least);
        // skip nodes that we have finished
        if (finished.contains(neighbor)) continue;
        var neighbordist = distances.getValue(neighbor);
        // assume "distance" along a link is unitary, but could be any non-negative number.
        var dist = leastdist + 1;  //Math.sqrt(least.location.distanceSquaredPoint(neighbor.location));
        if (dist < neighbordist) {
          // if haven't seen that node before, add it to the SEEN collection
          if (neighbordist === Infinity) {
            seen.add(neighbor);
          }
          // record the new best distance so far to that node
          distances.add(neighbor, dist);
        }
      }
    }

    return distances;
  }

  // This helper function finds a Node in the given collection that has the smallest distance.
  function leastNode(coll, distances) {
    var bestdist = Infinity;
    var bestnode = null;
    var it = coll.iterator;
    while (it.next()) {
      var n = it.value;
      var dist = distances.getValue(n);
      if (dist < bestdist) {
        bestdist = dist;
        bestnode = n;
      }
    }
    return bestnode;
  }


  // Find a path that is shortest from the BEGIN node to the END node.
  // (There might be more than one, and there might be none.)
  function findShortestPath(begin, end) {
    // compute and remember the distance of each node from the BEGIN node
    distances = findDistances(begin);

    // now find a path from END to BEGIN, always choosing the adjacent Node with the lowest distance
    var path = new go.List();
    path.add(end);
    while (end !== null) {
      var next = leastNode(end.findNodesInto(), distances);
      if (next !== null) {
        if (distances.getValue(next) < distances.getValue(end)) {
          path.add(next);  // making progress towards the beginning
        } else {
          next = null;  // nothing better found -- stop looking
        }
      }
      end = next;
    }
    // reverse the list to start at the node closest to BEGIN that is on the path to END
    // NOTE: if there's no path from BEGIN to END, the first node won't be BEGIN!
    path.reverse();
    return path;
  }


  // Recursively walk the graph starting from the BEGIN node;
  // when reaching the END node remember the list of nodes along the current path.
  // Finally return the collection of paths, which may be empty.
  // This assumes all links are unidirectional.
  function collectAllPaths(begin, end) {
    var stack = new go.List(go.Node);
    var coll = new go.List(go.List);

    function find(source, end) {
      source.findNodesOutOf().each(function(n) {
        if (n === source) return;  // ignore reflexive links
        if (n === end) {  // success
          var path = stack.copy();
          path.add(end);  // finish the path at the end node
          coll.add(path);  // remember the whole path
        } else if (!stack.contains(n)) {  // inefficient way to check having visited
          stack.add(n);  // remember that we've been here for this path (but not forever)
          find(n, end);
          stack.removeAt(stack.count - 1);
        }  // else might be a cycle
      });
    }

    stack.add(begin);  // start the path at the begin node
    find(begin, end);
    return coll;
  }

  // Return a string representation of a path for humans to read.
  function pathToString(path) {
    var pathArray = [];
    var s = path.length + ": ";
    for (var i = 0; i < path.length; i++) {
      if (i > 0) s += " -- ";
      s += path.elt(i).data.text;
      pathArray.push({text: path.elt(i).data.text, key:path.elt(i).data.key });
    }
    return s;
  }

  function pathToArray(path) {
    var pathArray = [];
    for (var i = 0; i < path.length; i++) {
      pathArray.push({text: path.elt(i).data.text, key:path.elt(i).data.key });
    }
    getLinkDataBetweenNodes(pathArray);
  }

  function getLinkDataBetweenNodes(array){
    console.log(array);
    var tempArray = [];
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = 0; j < linkDataArray.length; j++) {
        if ((array[i].key == linkDataArray[j].from) && (array[i+1].key == linkDataArray[j].to))
        {
          tempArray.push(linkDataArray[j].ingredients);
        }
      }
    }
    displayIngredientsList(array,tempArray);
  }

  // When a node is selected show distances from the first selected node.
  // When a second node is selected, highlight the shortest path between two selected nodes.
  // If a node is deselected, clear all highlights.
  function nodeSelectionChanged(node) {
    var diagram = node.diagram;
    if (diagram === null) return;
    diagram.clearHighlighteds();
    if (node.isSelected) {
      // when there is a selection made, always clear out the list of all paths
      var sel = document.getElementById("myPaths");
      sel.innerHTML = "";

      // show the distance for each node from the selected node
      var begin = diagram.selection.first();
      showDistances(begin);

      if (diagram.selection.count === 2) {
        var end = node;  // just became selected

        // highlight the shortest path
        highlightShortestPath(begin, end);

        // list all paths
        listAllPaths(begin, end);
      }
    }
  }


  // Have each node show how far it is from the BEGIN node.
  function showDistances(begin) {
    // compute and remember the distance of each node from the BEGIN node
    distances = findDistances(begin);

    // show the distance on each node
    var it = distances.iterator;
    while (it.next()) {
      var n = it.key;
      var dist = it.value;
      myDiagram.model.setDataProperty(n.data, "distance", dist);
    }
  }


  // Highlight links along one of the shortest paths between the BEGIN and the END nodes.
  // Assume links are unidirectional.
  function highlightShortestPath(begin, end) {
    highlightPath(findShortestPath(begin, end));
  }


  // List all paths from BEGIN to END
  function listAllPaths(begin, end) {
    // compute and remember all paths from BEGIN to END: Lists of Nodes
    paths = collectAllPaths(begin, end);

    // update the Selection element with a bunch of Option elements, one per path
    var sel = document.getElementById("myPaths");
    sel.innerHTML = "";  // clear out any old Option elements
    paths.each(function(p) {
      var opt = document.createElement("option");
      opt.text = pathToString(p);
      sel.add(opt, null);
    });
    sel.onchange = highlightSelectedPath;
  }

  // A collection of all of the paths between a pair of nodes, a List of Lists of Nodes
  var paths = null;
  // This is only used for listing all paths for the selection onchange event.

  // When the selected item changes in the Selection element,
  // highlight the corresponding path of nodes.
  function highlightSelectedPath() {
    var sel = document.getElementById("myPaths");
    var idx = sel.selectedIndex;
    var opt = sel.options[idx];
    var val = opt.value;
    highlightPath(paths.elt(sel.selectedIndex));
  }

  // Highlight a particular path, a List of Nodes.
  function highlightPath(path) {
    myDiagram.clearHighlighteds();
    for (var i = 0; i < path.count - 1; i++) {
      var f = path.elt(i);
      var t = path.elt(i + 1);
      f.findLinksTo(t).each(function(l) { l.isHighlighted = true; });
    }
    pathToArray(path);
  }

  function displayIngredientsList(pathArray,linksArray){ // first contain nodes, second links between them
    var displayThisShit = pathArray[0].text + " -> " + pathArray[pathArray.length - 1].text + "<br>"; // First node and Last node of path

    // Splits Strings into arrays
    var tempArray = [];
    for (var i = 0; i < linksArray.length; i++) {
      for (var j = 0; j < linksArray[i].length; j++) {
        var number = parseInt(linksArray[i][j].substr(0,linksArray[i][j].indexOf(' ')).replace('x',''));
        var string = linksArray[i][j].substr(linksArray[i][j].indexOf(' ')+1);
        tempArray.push([number,string]);
      };
    };
    //Eliminate duplicates
    var ingredientsArray = [];
    for (var i = 0; i < tempArray.length; i++) 
    {
      if(ingredientsArray.length >= 1)
      {
        for (var j = 0; j < ingredientsArray.length; j++) 
        {
          if (tempArray[i] != null) {
            if(tempArray[i][1] == ingredientsArray[j][1])
            {
              ingredientsArray[j][0] = ingredientsArray[j][0] + tempArray[i][0];
             tempArray.splice(i, 1);
            }
          }
        }
      }

      if (tempArray[i] != null) {
        ingredientsArray.push([tempArray[i][0],tempArray[i][1]]);
      }
      
    }
    // Display items
    var temp = "";
    for (var i = 0; i < ingredientsArray.length; i++) {
        temp += ingredientsArray[i][0] + "x " + ingredientsArray[i][1] + "<br>"; 
    }
    document.getElementById("ingredientsList").innerHTML = displayThisShit + temp;
  }

});