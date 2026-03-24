"use client";
import { useQueryUtil } from "@/hooks/use-query";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface District {
  _id: string;
  name: string;
}

interface DistrictResponse {
  success: boolean;
  message: string;
  data: District[];
}

interface SelectDistrictsProps {
  onProvinceChange?: (value: string) => void;
  onDistrictChange?: (value: string) => void;
  onBagKhorooChange?: (value: string) => void;
  defaultProvince?: District;
  defaultDistrict?: District;
  defaultBagKhoroo?: District;
}

const SelectDistricts = ({
  onProvinceChange,
  onDistrictChange,
  onBagKhorooChange,
  defaultProvince,
  defaultDistrict,
  defaultBagKhoroo,
}: SelectDistrictsProps) => {
  const [selectedProvince, setSelectedProvince] = useState<string>(
    defaultProvince?._id || "",
  );
  const [selectedDistrict, setSelectedDistrict] = useState<string>(
    defaultDistrict?._id || "",
  );
  const [selectedBagKhoroo, setSelectedBagKhoroo] = useState<string>(
    defaultBagKhoroo?._id || "",
  );

  // Add useEffect to trigger initial values
  useEffect(() => {
    if (defaultProvince?._id) {
      onProvinceChange?.(defaultProvince._id);
    }
    if (defaultDistrict?._id) {
      onDistrictChange?.(defaultDistrict._id);
    }
    if (defaultBagKhoroo?._id) {
      onBagKhorooChange?.(defaultBagKhoroo._id);
    }
  }, [
    defaultProvince,
    defaultDistrict,
    defaultBagKhoroo,
    onProvinceChange,
    onDistrictChange,
    onBagKhorooChange,
  ]);

  // Fetch provinces
  const { data: provinces, isLoading: isLoadingProvinces } =
    useQueryUtil<DistrictResponse>({
      queryKey: ["districts"],
      endpoint: "/district",
    });

  // Fetch districts based on selected province
  const { data: districts, isLoading: isLoadingDistricts } =
    useQueryUtil<DistrictResponse>({
      queryKey: ["districts", selectedProvince],
      endpoint: `/district/${selectedProvince}`,
      enabled: !!selectedProvince,
    });

  const { data: bagKhoroos, isLoading: isLoadingBagKhoroos } =
    useQueryUtil<DistrictResponse>({
      queryKey: ["bagKhoroo", selectedDistrict],
      endpoint: `/district/bagKhoroo/${selectedDistrict}`,
      enabled: !!selectedDistrict,
    });

  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value);
    setSelectedDistrict(""); // Reset district when province changes
    setSelectedBagKhoroo(""); // Reset bag/khoroo when province changes
    onProvinceChange?.(value);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    setSelectedBagKhoroo(""); // Reset bag/khoroo when district changes
    onDistrictChange?.(value);
  };

  const handleBagKhorooChange = (value: string) => {
    setSelectedBagKhoroo(value);
    onBagKhorooChange?.(value);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="grid gap-2">
        <Label>Аймаг</Label>
        <Select
          value={selectedProvince}
          onValueChange={handleProvinceChange}
          disabled={isLoadingProvinces}
        >
          <SelectTrigger>
            <SelectValue placeholder="Аймаг сонгох" />
          </SelectTrigger>
          <SelectContent>
            {provinces?.data.map((province) => (
              <SelectItem key={province._id} value={province._id}>
                {province.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Сум</Label>
        <Select
          value={selectedDistrict}
          onValueChange={handleDistrictChange}
          disabled={!selectedProvince || isLoadingDistricts}
        >
          <SelectTrigger>
            <SelectValue placeholder="Сум сонгох" />
          </SelectTrigger>
          <SelectContent>
            {districts?.data?.map((district) => (
              <SelectItem key={district._id} value={district._id}>
                {district.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Баг/Хороо</Label>
        <Select
          value={selectedBagKhoroo}
          onValueChange={handleBagKhorooChange}
          disabled={!selectedDistrict || isLoadingBagKhoroos}
        >
          <SelectTrigger>
            <SelectValue placeholder="Баг/Хороо сонгох" />
          </SelectTrigger>
          <SelectContent>
            {bagKhoroos?.data?.map((bagKhoroo) => (
              <SelectItem key={bagKhoroo._id} value={bagKhoroo._id}>
                {bagKhoroo.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectDistricts;
