-- it is frequently used in group by composite key
CREATE INDEX idx_account_id_name_date
    ON accounts (id, name, created_at);

-- it is used in the third query where condition as a composite key
CREATE INDEX idx_campaigns_start_date_end_date
    ON campaigns (start_date, end_date);

-- it is used in the second query where condition as a filter
CREATE INDEX idx_account_active
    ON accounts (active);

-- it is used in the second query where condition as a filter
CREATE INDEX idx_campaigns_date
    ON campaigns (created_at);
