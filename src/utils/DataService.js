import {
    materials,
    devices,
    thicknesses,
    center_hole_sizes,
    other_center_hole_sizes,
    backing_materials,
    backing_materials_rolls,
    backing_materials_sheets,
    backing_materials_belts,
    configuration_namespaceObject
  } from "./Constants";
  import { sizeSorter, unique } from "./Common";
  
  const sizes = configuration_namespaceObject.L;
  
  /**
   * DataService Utility
   * Contains complex logic for calculating sizes, attachments, and configurations
   */
  
  export const getSizes = (pickedData) => {
    if (!pickedData) return [];
  
    const { material: materialName, device } = pickedData;
  
    if (materialName) {
      const material = materials[materialName];
      const shapeNames = material?.["Shape Description"] || [];
  
      let results = sizes.filter((s) =>
        shapeNames.includes(s?.["Shape Description"]?.toLowerCase())
      );
  
      if (device) {
        const sizesPerDevice = material?.SizesPerDevice?.[device];
  
        if (
          ["Discs", "Sponges", "Belts", "Sheets"].includes(materialName) &&
          sizesPerDevice
        ) {
          const machines =
            devices?.[device]?.Machine?.map((m) => m.toLowerCase()) || [];
  
          if (
            ["Sponges", "Sheets"].includes(materialName) &&
            device !== "Disc Orbital Sander"
          ) {
            const additionalSizes = results
              .filter((r) => machines.includes(r?.Machine?.toLowerCase()))
              .flatMap(
                (r) =>
                  r?.Sizes?.filter((s) => s["Dim 2 Description Fraction"]).map(
                    (s) =>
                      `${s["Dim 1 Description Fraction"]}x${s["Dim 2 Description Fraction"]}`
                  ) || []
              );
  
            return unique([...sizesPerDevice, ...additionalSizes]).sort(sizeSorter);
          }
  
          const additionalSizes = results
            .filter((r) => machines.includes(r?.Machine?.toLowerCase()))
            .flatMap(
              (r) =>
                r?.Sizes?.map((s) => s["Dim 1 Description Fraction"]) || []
            );
  
          return unique([...sizesPerDevice, ...additionalSizes]).sort(sizeSorter);
        }
      }
  
      if (Array.isArray(material?.Sizes)) {
        return material.Sizes;
      }
  
      return unique(
        results.flatMap(
          (s) => s?.Sizes?.map((size) => size["Dim 1 Description Fraction"]) || []
        )
      ).sort(sizeSorter);
    }
  
    if (device) {
      const deviceData = devices?.[device];
      const machineNames = deviceData?.Machine || [];
  
      const results = sizes.filter((s) =>
        machineNames.some((name) => new RegExp(name, "i").test(s?.Machine))
      );
  
      return unique(
        results.flatMap(
          (s) => s?.Sizes?.map((size) => size["Dim 1 Description Fraction"]) || []
        )
      ).sort(sizeSorter);
    }
  
    return [];
  };
  
  export const getAttachments = (pickedData) => {
    if (!pickedData?.material) return {};
  
    const material = materials[pickedData.material];
    let types = { ...material["Attachment Types"] };
  
    for (let type in types) {
      types[type] = { ...types[type] };
    }
  
    if (pickedData.size) {
      const specificSizes = sizes
        .map((shape) => {
          if (
            material["Shape Description"].indexOf(shape["Shape Description"]) === -1
          ) {
            return null;
          }
  
          return shape.Sizes.find((size) => {
            if (pickedData.size && pickedData.size_height) {
              return (
                size["Dim 1 Description Fraction"] === pickedData.size &&
                size["Dim 2 Description Fraction"] === pickedData.size_height
              );
            }
            return size["Dim 1 Description Fraction"] === pickedData.size;
          });
        })
        .filter(Boolean)
        .map((size) => size?.Attachments)
        .flat();
  
      for (let type in types) {
        let found = false;
        if (types[type].Values) {
          for (let value of types[type].Values) {
            if (specificSizes.find((attachment) => attachment === value)) {
              found = true;
              break;
            }
          }
        }
        types[type].Selectable = found;
      }
    }
  
    return types;
  };
  
  export const getCenterHoles = (pickedData) => {
    if (pickedData?.material) {
      return materials[pickedData.material]?.["Center Holes"] ?? {};
    }
    return {};
  };
  
  export const getCenterHoleSizes = () => center_hole_sizes;
  
  export const getOtherCenterHoleSizes = () => other_center_hole_sizes;
  
  export const getVentedHoles = (pickedData) => {
    if (!pickedData?.material) return [];
    return materials[pickedData.material]?.["Vented Holes"] || [];
  };
  
  export const getBackingMaterials = (pickedData) => {
    if (pickedData?.material === "Rolls") return backing_materials_rolls;
    if (pickedData?.material === "Sheets") return backing_materials_sheets;
    if (pickedData?.material === "Belts") return backing_materials_belts;
    return backing_materials;
  };
  
  export const getThicknesses = () => thicknesses || [];
  