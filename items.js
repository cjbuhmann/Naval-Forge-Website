const items = [
  {
    "name": "Oak Log",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Hemp",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Iron Ores",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Fish Meat",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Molasses",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Tobacco",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Lignum Vitae Log",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Saltpeter",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Sulphur",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Fir Log",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Medicinal Bark",
    "type": "resource",
    "level": 0,
    "reals": 0,
    "makes": 1,
    "components": []
  },
  {
    "name": "Charcoal",
    "type": "material",
    "level": 0,
    "reals": 1,
    "makes": 100,
    "components": [
      {
        "item": "Oak Log",
        "quantity": 40
      }
    ]
  },
  {
    "name": "Oak Planks",
    "type": "material",
    "level": 1,
    "reals": 1,
    "makes": 100,
    "components": [
      {
        "item": "Oak Log",
        "quantity": 40
      }
    ]
  },
  {
    "name": "Sail Canvas",
    "type": "material",
    "level": 2,
    "reals": 1,
    "makes": 100,
    "components": [
      {
        "item": "Hemp",
        "quantity": 40
      }
    ]
  },
  {
    "name": "Iron Fittings",
    "type": "material",
    "level": 3,
    "reals": 1,
    "makes": 100,
    "components": [
      {
        "item": "Iron Ores",
        "quantity": 20
      },
      {
        "item": "Charcoal",
        "quantity": 20
      }
    ]
  },
  {
    "name": "Barrels",
    "type": "material",
    "level": 4,
    "reals": 1,
    "makes": 50,
    "components": [
      {
        "item": "Iron Fittings",
        "quantity": 20
      },
      {
        "item": "Oak Planks",
        "quantity": 30
      }
    ]
  },
  {
    "name": "Rum",
    "type": "material",
    "level": 5,
    "reals": 1,
    "makes": 40,
    "components": [
      {
        "item": "Molasses",
        "quantity": 50
      },
      {
        "item": "Barrels",
        "quantity": 50
      }
    ]
  },
  {
    "name": "Provisions",
    "type": "material",
    "level": 6,
    "reals": 25,
    "makes": 50,
    "components": [
      {
        "item": "Fish Meat",
        "quantity": 100
      },
      {
        "item": "Barrels",
        "quantity": 100
      },
      {
        "item": "Rum",
        "quantity": 100
      },
      {
        "item": "Tobacco",
        "quantity": 100
      }
    ]
  },
  {
    "name": "Ropes and Blocks",
    "type": "material",
    "level": 7,
    "reals": 5,
    "makes": 100,
    "components": [
      {
        "item": "Lignum Vitae Log",
        "quantity": 80
      },
      {
        "item": "Hemp",
        "quantity": 60
      },
      {
        "item": "Iron Fittings",
        "quantity": 40
      }
    ]
  },
  {
    "name": "Gun Powder",
    "type": "consumable",
    "level": 9,
    "reals": 105,
    "makes": 100,
    "components": [
      {
        "item": "Saltpeter",
        "quantity": 3
      },
      {
        "item": "Sulphur",
        "quantity": 3
      },
      {
        "item": "Charcoal",
        "quantity": 2
      },
      {
        "item": "Barrels",
        "quantity": 1
      }
    ]
  },
  {
    "name": "Ball Ammo",
    "type": "consumable",
    "level": 8,
    "reals": 2,
    "makes": 100,
    "components": [
      {
        "item": "Iron Ores",
        "quantity": 20
      },
      {
        "item": "Charcoal",
        "quantity": 30
      }
    ]
  },
  {
    "name": "Grape Ammo",
    "type": "consumable",
    "level": 10,
    "reals": 28,
    "makes": 100,
    "components": [
      {
        "item": "Ball Ammo",
        "quantity": 200
      },
      {
        "item": "Sail Canvas",
        "quantity": 100
      }
    ]
  },
  {
    "name": "Chain Ammo",
    "type": "consumable",
    "level": 11,
    "reals": 42,
    "makes": 100,
    "components": [
      {
        "item": "Ball Ammo",
        "quantity": 200
      },
      {
        "item": "Iron Fittings",
        "quantity": 100
      }
    ]
  },
  {
    "name": "Hull Repairs",
    "type": "consumable",
    "level": 12,
    "reals": 276,
    "makes": 10,
    "components": [
      {
        "item": "Oak Planks",
        "quantity": 100
      },
      {
        "item": "Iron Fittings",
        "quantity": 62
      }
    ]
  },
  {
    "name": "Rig Repairs",
    "type": "consumable",
    "level": 13,
    "reals": 95,
    "makes": 10,
    "components": [
      {
        "item": "Fir Log",
        "quantity": 20
      },
      {
        "item": "Sail Canvas",
        "quantity": 24
      },
      {
        "item": "Ropes and Blocks",
        "quantity": 18
      }
    ]
  },
  {
    "name": "Medicine",
    "type": "consumable",
    "level": 14,
    "reals": 448,
    "makes": 100,
    "components": [
      {
        "item": "Sail Canvas",
        "quantity": 25
      },
      {
        "item": "Medicinal Bark",
        "quantity": 25
      },
      {
        "item": "Provisions",
        "quantity": 5
      }
    ]
  }
];