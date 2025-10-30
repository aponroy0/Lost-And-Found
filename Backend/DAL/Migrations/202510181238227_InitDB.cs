namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        CategoryId = c.Int(nullable: false, identity: true),
                        CategoryName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.CategoryId);
            
            CreateTable(
                "dbo.Reports",
                c => new
                    {
                        ItemId = c.Int(nullable: false, identity: true),
                        ItemName = c.String(nullable: false),
                        Title = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        CatagoryId = c.Int(nullable: false),
                        Status = c.String(nullable: false),
                        ImageURL = c.String(nullable: false),
                        LocationName = c.String(nullable: false),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                        ContactInfo = c.String(nullable: false),
                        PostedBy = c.Int(nullable: false),
                        IsClaimed = c.Boolean(nullable: false),
                        PostedAt = c.DateTime(nullable: false),
                        ClaimedDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.ItemId)
                .ForeignKey("dbo.Categories", t => t.CatagoryId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.PostedBy, cascadeDelete: true)
                .Index(t => t.CatagoryId)
                .Index(t => t.PostedBy);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        HashPassword = c.String(nullable: false),
                        Phone = c.String(nullable: false),
                        RoleId = c.Int(nullable: false),
                        CreatedAt = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("dbo.Roles", t => t.RoleId, cascadeDelete: true)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoleName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Reports", "PostedBy", "dbo.Users");
            DropForeignKey("dbo.Users", "RoleId", "dbo.Roles");
            DropForeignKey("dbo.Reports", "CatagoryId", "dbo.Categories");
            DropIndex("dbo.Users", new[] { "RoleId" });
            DropIndex("dbo.Reports", new[] { "PostedBy" });
            DropIndex("dbo.Reports", new[] { "CatagoryId" });
            DropTable("dbo.Roles");
            DropTable("dbo.Users");
            DropTable("dbo.Reports");
            DropTable("dbo.Categories");
        }
    }
}
