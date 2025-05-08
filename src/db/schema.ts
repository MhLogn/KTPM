import { pgTable, uuid, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerk_id").unique().notNull(),
    name: text("name").notNull(),
    //add banner fields
    imageUrl: text("image_url").notNull(),
    createAt: timestamp("create_at").defaultNow().notNull(),
    updateAt: timestamp("update_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)])

export const categories = pgTable("categories", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull().unique(),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow().notNull(), 
    updateddAt: timestamp("updated_at").defaultNow().notNull(), 
}, (t) => [uniqueIndex("name_inx").on(t.name)] );
