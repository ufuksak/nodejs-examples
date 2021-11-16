# nodejs-examples

### run example1
npm run start1

### run example3
npm run start3

### run example4
npm run start4

### run example5
npm run start5

### exercise6 sample records to test the queries, uuid values will be modified from Accounts, Campains records in the creation orders.
```
--Excercise 6 -- Acc1
INSERT INTO accounts(id, active, name, created_at) VALUES (gen_random_uuid(), true, 'AC1',now());
-- Acc2
INSERT INTO accounts(id, active, name, created_at) VALUES (gen_random_uuid(), true, 'AC2',now());

-- campaigns1 & campaigns2, AC1, run 2 times
insert into campaigns(id, account_id, name, start_date, end_date, created_at)
VALUES (gen_random_uuid(), 'f08b9f91-7ca1-4d4e-b180-73f2d008fc49','CA2',
now(), now(), now());

-- campaigns3, AC2, start_date & end_date values could updated to get 1 week long records
insert into campaigns(id, account_id, name, start_date, end_date, created_at)
VALUES (gen_random_uuid(), '99a5551d-7895-4d83-8005-577671cdc9e9','CA3',
        now(), now(), now());

-- clicks, campaigns1, run three times
insert into clicks(id, campaign_id, created_at)
VALUES(gen_random_uuid(), '76faaf70-27f3-457c-ab18-d8ae05ad3f55', now());
-- clicks, campaigns2, run two times
insert into clicks(id, campaign_id, created_at)
VALUES(gen_random_uuid(), '8c61641d-5763-41a3-9167-e08865918b80', now());
-- clicks, campaigns3, run one time
insert into clicks(id, campaign_id, created_at)
VALUES(gen_random_uuid(), '76e59cf6-95cb-4bc2-8a37-f81073ef25d5', now());
```
