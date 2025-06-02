import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

const userInfoVariants = cva("")